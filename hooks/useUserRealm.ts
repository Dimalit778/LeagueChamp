import { useCallback, useEffect, useState } from 'react';
import { useObject, useRealm, useUser } from '@realm/react';
import { League, User } from '@/models';

// GenerateMongoLikeObjectId
import { ObjectId } from 'bson';

export function useUserRealm() {
  const user = useUser().customData;
  const realm = useRealm();
  const [leagues, setLeagues] = useState([]);
  // const user = useObject(User, new ObjectId(_id));
  console.log('user ', user.leagues);

  // console.log('leagues ', leagues);

  const deleteLeague = useCallback(
    (leagueId: string) => {
      realm.write(() => {
        // realm.delete(League);
        // Alternatively if passing the ID as the argument to handleDeleteTask:
        // realm.delete(realm.objectForPrimaryKey('Task', id));
      });
    },
    [realm]
  );

  return {
    leagues,
    // userLeagues,
    deleteLeague,
  };
}
