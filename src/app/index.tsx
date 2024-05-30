import { Redirect } from 'expo-router';
import { I18nManager, Text, View } from 'react-native';
import 'react-native-get-random-values';

I18nManager.allowRTL(false);

export default function App() {
  return <Redirect href="(drawer)" />;
}
