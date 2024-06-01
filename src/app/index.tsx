import { useQuery, useRealm, useUser } from '@realm/react';

import { useEffect } from 'react';
import { I18nManager, Text, View } from 'react-native';
import 'react-native-get-random-values';
import { League, User } from '../models';
import { Redirect } from 'expo-router';

I18nManager.allowRTL(false);

export default function App() {
  const realm = useRealm();
  const user = useUser();

  const userApp = useQuery(User).filtered(`userId == '${user.id}'`);
  const userLeague = useQuery(League).filtered(`owner_id == '${user.id}'`);
  console.log('app');
  // useEffect(() => {
  //   realm.subscriptions.update((mutableSubs) => {
  //     mutableSubs.add(
  //       realm.objects(League).filtered(`owner_id == '${user.id}'`)
  //     );
  //   });
  // }, [realm, userApp]);
  console.log('1 ', userApp);
  console.log('2 ', userLeague);

  {
    !userLeague[0] ? (
      <Redirect href="(main)" />
    ) : (
      <Redirect href="(main)/Profile" />
    );
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
