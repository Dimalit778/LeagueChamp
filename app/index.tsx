import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';

import 'react-native-get-random-values';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';

import { Text, View } from 'react-native';
import { useAuth, useUser } from '@realm/react';
import { Button } from 'react-native-elements';

export default function App() {
  const { logOut } = useAuth();
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();
  const user = useUser().customUser;
  console.log('user ->', user);
  // const { userLeagues } = useLeaguesRealm();

  // if (userLeagues.length === 0)
  //   return <Redirect href="/(modal)/leagues/MyLeagues" />;
  // return <Redirect href="/(tabs)/Home" />;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title={'Logout'} onPress={logOut} />
    </View>
  );
}
// 192.168.87.39:19000 sitemap
