import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { ThemeProvider } from '../themeProvider/themeContext';
import RealmCustomProvider from '../realm/Realm';

import { Stack } from 'expo-router';

import 'react-native-get-random-values';

import { StatusBar } from 'expo-status-bar';
const RootLayout = () => {
  console.log('RootLayout');
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider>
          <RealmCustomProvider>
            <StatusBar style="light" />
            <Stack screenOptions={{ headerShown: false }} />
          </RealmCustomProvider>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
