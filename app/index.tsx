import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useRealm, useUser } from '@realm/react';
import { useAppDispatch } from '@/redux/constans/hooks';
import { setUser } from '@/redux/reducers/userReducer';
import { ObjectId } from 'bson';
import 'react-native-get-random-values';
export default function App() {
  const user = useUser().customData;
  const realm = useRealm();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   console.log('app useEffect');
  //   if (user) {
  //     dispatch(setUser(user));
  //   }
  //   const updateSubscriptions = async () => {
  //     await realm.subscriptions.update((mutableSubs) => {
  //       user.leagues.map((id: string) => {
  //         mutableSubs.add(
  //           realm.objects('League').filtered('_id == $0', new ObjectId(id))
  //         );
  //       });
  //     });
  //   };
  //   updateSubscriptions();
  // }, [user, dispatch, realm]);

  return <Redirect href="/(tabs)/Home" />;
}
