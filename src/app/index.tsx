import { I18nManager, Text, View } from 'react-native';
import 'react-native-get-random-values';

import { Redirect, Stack, useRouter } from 'expo-router';

I18nManager.allowRTL(false);

export default function App() {
  return <Redirect href="(main)/MyLeagues" />;
}
