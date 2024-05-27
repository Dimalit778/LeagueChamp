import 'react-native-get-random-values';
import React from 'react';
import { Stack } from 'expo-router';

import { ThemeProvider } from '../themeProvider/themeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import RealmCustomProvider from '../providers/Realm';

import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

const RootLayout = () => {
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
