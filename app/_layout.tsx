import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { Link, Slot, Stack } from 'expo-router';

import 'react-native-get-random-values';

import { StatusBar } from 'expo-status-bar';
import { store } from '../redux/store/store';
import { ThemeProvider } from '../themeProvider/themeContext';
import Realm from '../realm/Realm';
import { Text, View } from 'react-native';
import TabsHeader from '../components/header/TabsHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const RootLayout = () => {
  console.log('RootLayout');
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <ThemeProvider>
            <Realm>
              <StatusBar style="auto" />
              <Stack screenOptions={{ headerShown: false }}></Stack>
            </Realm>
          </ThemeProvider>
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
