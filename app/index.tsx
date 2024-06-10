import { I18nManager, Text, View } from 'react-native';
import 'react-native-get-random-values';

import { Redirect, Slot, Stack, useRouter } from 'expo-router';
import { LoadingBall } from '../components/LoadingBall';

I18nManager.allowRTL(false);

export default function HomeScreen() {
  return <Redirect href="(tabs)/Home" />;
}
