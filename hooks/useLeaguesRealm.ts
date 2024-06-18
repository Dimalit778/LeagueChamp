import { useCallback, useEffect, useState } from 'react';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { League, User } from '@/models';
import { ObjectId } from 'bson';

export function useLeaguesRealm() {
  const realm = useRealm();
  const user = useUser().customData;

  const leagues = useQuery(League);
  const userObject = useObject(User, new ObjectId(user._id));

  useEffect(() => {
    const updateSubscriptions = async () => {
      await realm.subscriptions.update((mutableSubs) => {
        user.leagues.map((id: string) => {
          mutableSubs.add(
            realm.objects('League').filtered('_id == $0', new ObjectId(id))
          );
        });
      });
    };
    updateSubscriptions();
  }, [realm, user]);

  /**
   * Create League and save it to User
   */
  const createLeague = useCallback(
    (leagueName: string, code: string, joinCode: string) => {
      const newLeague = realm.write(() => {
        return realm.create('League', {
          _id: new ObjectId(),
          leagueName,
          code,
          joinCode,
          isSelected: false,
          owner_id: user._id,
          users: [userObject],
        } as League);
      });
      realm.write(() => {
        if (newLeague) {
          userObject.leagues.push(newLeague);
        }
      });
    },
    [realm]
  );

  /**
   * Deletes a League from the database and from User leagues
   */
  const deleteLeague = useCallback(
    (league: League) => {
      if (league.owner_id !== user._id) return false;
      const leagueIndex = user.leagues.findIndex((l) =>
        l._id.equals(league._id)
      );
      if (leagueIndex !== -1) {
        realm.write(() => {
          realm.delete(league);
          user.leagues.splice(leagueIndex, 1);
        });
        return true;
      }
    },
    [realm]
  );

  return {
    leagues,
    createLeague,
    deleteLeague,
  };
}
