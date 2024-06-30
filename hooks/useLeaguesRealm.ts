import { useCallback, useState } from 'react';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { League, User } from '@/realm/models';
import { ObjectId } from 'bson';

export function useLeaguesRealm() {
  const realm = useRealm();
  const user = useUser().customData;
  const [leagues, setLeagues] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const userObject = useObject(User, new ObjectId(user._id));

  const userLeagues = userObject?.leagues;

  const favoriteLeague = userObject?.leagues.find((l) => l.isSelected);

  const getAllLeagues = useQuery(League);
  /**
   * Create League and save it to User
   */
  const createLeague = useCallback(
    (leagueName: string, selectedItem: any, joinCode: string) => {
      const newLeague = realm.write(() => {
        return realm.create('League', {
          _id: new ObjectId(),
          league: selectedItem.name,
          name: leagueName,
          emblem: selectedItem.emblem,
          code: selectedItem.code,
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
   * -- > Set Favorite League
   * set isSelected to true for the selected league
   * set isSelected to false for the rest
   */
  const setFavoriteLeague = useCallback(
    (league: League) => {
      realm.write(() => {
        userLeagues.forEach((l) => {
          if (l._id?.equals(league._id)) {
            l.isSelected = true;
          } else {
            l.isSelected = false;
          }
        });
      });
    },
    [realm]
  );
  const joinNewLeague = useCallback(
    (code: string) => {
      let selectedLeague = getAllLeagues.filtered(`joinCode == '${code}'`);
      if (selectedLeague.length == 0)
        return { status: false, message: 'League not found' };
      let checkUserInLeague = selectedLeague[0].users.find(
        (u) => u._id == user._id
      );
      if (checkUserInLeague)
        return { status: false, message: 'You are already in this League' };

      realm.write(() => {
        userObject.leagues.push(selectedLeague[0]);
        selectedLeague[0].users.push(userObject);
      });

      return { status: true, message: 'League joined' };
    },
    [realm]
  );
  const leaveLeague = useCallback(
    (league: League) => {
      realm.write(() => {
        userObject.leagues = userObject.leagues.filter(
          (l) => !l._id?.equals(league._id)
        );
      });
    },
    [realm]
  );

  /**
   * Deletes a League from the database and from User leagues
   */ //  -- WORKS
  const deleteLeague = useCallback(
    (league: League) => {
      return realm.write(() => {
        user.leagues = user.leagues.filter((l) => !l._id?.equals(league._id));
        realm.delete(league);
      });
    },
    [realm]
  );

  return {
    userLeagues,
    favoriteLeague,
    setFavoriteLeague,
    createLeague,
    joinNewLeague,
    leaveLeague,
    deleteLeague,
  };
}
//  ---> Subscribe to league changes manually
// useEffect(() => {
//   console.log('subscriptions', user.leagues);
//   const updateSubscriptions = async () => {
//     await realm.subscriptions.update((mutableSubs) => {
//       mutableSubs.add(userLeagues);
//     });
//   };
//   updateSubscriptions();
// }, [realm, user, leagues]);
