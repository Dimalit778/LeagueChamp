import { I18nManager } from 'react-native';
import { Redirect } from 'expo-router';
I18nManager.allowRTL(false);

export default function App() {
  return <Redirect href="(drawer)" />;
}
