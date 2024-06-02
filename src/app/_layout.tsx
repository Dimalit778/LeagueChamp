import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { ThemeProvider } from '../themeProvider/themeContext';
import RealmCustomProvider from '../realm/Realm';

import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const APP_ID: string = 'leaguechamp-xqhhequ';

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider>
          <RealmCustomProvider>
            <StatusBar barStyle="light-content" />
            <Stack screenOptions={{ headerShown: false }} />
          </RealmCustomProvider>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
