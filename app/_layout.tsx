import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { store } from '../redux/store/store';
import { ThemeProvider } from '../themeProvider/themeContext';
import Realm from '../realm/Realm';
import { I18nManager } from 'react-native';
I18nManager.allowRTL(false);

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { googleConfig } from '@/components/Auth/googleConfig';

const RootLayout = () => {
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
