import { useCallback, useEffect, useState } from 'react';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { League, User } from '@/models';
import { ObjectId } from 'bson';

export function useLeaguesRealm() {
  const realm = useRealm();
  const user = useUser().customData;

  const leagues = useQuery(League);
  const userObject = useObject(User, new ObjectId(user._id));

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
      console.log('league', league._id);
      realm.write(() => {
        user.leagues = user.leagues.filter((l) => !l._id?.equals(league._id));
        console.log('user.leagues', user.leagues);
        // realm.delete(league);
      });
    },
    [realm]
  );

  return {
    leagues,
    createLeague,
    deleteLeague,
  };
}
