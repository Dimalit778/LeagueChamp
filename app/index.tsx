import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';

import 'react-native-get-random-values';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';
import { googleConfig } from '@/components/Auth/googleConfig';

export default function App() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  const { userLeagues } = useLeaguesRealm();

  if (userLeagues.length === 0)
    return <Redirect href="/(modal)/leagues/MyLeagues" />;
  return <Redirect href="/(tabs)/Home" />;
}
// 192.168.87.39:19000 sitemap
