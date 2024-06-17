import { useCallback, useState } from 'react';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { League, User } from '@/models';

import { ObjectId } from 'bson';
export function useLeaguesRealm() {
  const realm = useRealm();
  const { _id } = useUser().customData;
  const user = useObject(User, new ObjectId(_id));

  const createLeague = useCallback(
    (leagueName: string, code: string, joinCode: string) => {
      const newLeague = realm.write(() => {
        return realm.create('League', {
          _id: new ObjectId(),
          leagueName,
          code,
          joinCode,
          isSelected: false,
          owner_id: _id,
          users: [user],
        } as League);
      });
      realm.write(() => {
        if (newLeague) {
          user.leagues.push(newLeague);
        }
      });
    },
    [realm, _id]
  );

  /**
   * Deletes a task from the database.
   */
  const deleteLeague = useCallback(
    (league: League) => {
      if (league.owner_id !== _id) return 'Not your league!';
      const leagueIndex = user.leagues.findIndex((l) => l._id === league._id);
      if (leagueIndex !== -1) {
        realm.delete(league);
        user.leagues.splice(leagueIndex, 1);
      }
    },
    [realm, _id]
  );

  return {
    createLeague,

    deleteLeague,
  };
}
