import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { Link, Slot, Stack } from 'expo-router';

import 'react-native-get-random-values';

import { StatusBar } from 'expo-status-bar';
import { store } from '../redux/store/store';
import { ThemeProvider } from '../themeProvider/themeContext';
import Realm from '../realm/Realm';
import { Text, View } from 'react-native';

const RootLayout = () => {
  console.log('RootLayout');
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider>
          <Realm>
            <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false }}></Stack>
          </Realm>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
