import { useObject, useQuery, useRealm, useUser } from '@realm/react';

import { useEffect } from 'react';
import { I18nManager, Text, View } from 'react-native';
import 'react-native-get-random-values';
import { League, User } from '../models';
import { Redirect } from 'expo-router';
import { useDispatch } from 'react-redux';
import { BSON } from 'realm';
import { setUser } from '../redux/reducers/userReducer';

I18nManager.allowRTL(false);

export default function App() {
  const realm = useRealm();
  const user = useUser();

  const userApp = useObject(User, new BSON.ObjectId(user.customData._id));

  const dispatch = useDispatch();

  useEffect(() => {
    if (userApp) {
      dispatch(setUser(userApp));
      realm.subscriptions.update((mutableSubs) => {
        mutableSubs.add(
          realm.objects(League).filtered(`owner_id == '${user.id}'`)
        );
      });
    }
  }, [realm, userApp]);

  return <Redirect href="(main)/MainPage" />;
  // return (
  //   <View>
  //     <Text>TTTTTTTTTT</Text>
  //   </View>
  // );
}
