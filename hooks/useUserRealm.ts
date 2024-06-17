import { useCallback, useState } from 'react';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { League, User } from '@/models';

// GenerateMongoLikeObjectId
import { ObjectId } from 'bson';

export function useUserRealm() {
  const { _id } = useUser().customData;
  const realm = useRealm();
  const user = useObject(User, new ObjectId(_id));

  const leagues = user.leagues;

  const deleteLeague = useCallback(
    (leagueId: string) => {
      realm.write(() => {
        // realm.delete(League);
        // Alternatively if passing the ID as the argument to handleDeleteTask:
        // realm.delete(realm.objectForPrimaryKey('Task', id));
      });
    },
    [realm, _id]
  );

  return {
    leagues,
    // userLeagues,
    deleteLeague,
  };
}
