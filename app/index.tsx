import React from 'react';
import { Redirect } from 'expo-router';
import { I18nManager } from 'react-native';
I18nManager.allowRTL(false);
import 'react-native-get-random-values';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';

export default function App() {
  const { userLeagues } = useLeaguesRealm();

  if (userLeagues.length === 0)
    return <Redirect href="/(modal)/leagues/MyLeagues" />;
  return <Redirect href="/(tabs)/Home" />;
}
// 192.168.87.39:19000 sitemap
