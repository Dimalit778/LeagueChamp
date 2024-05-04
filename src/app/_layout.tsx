import 'react-native-get-random-values';
import React from 'react';
import { Stack } from 'expo-router';

import { ThemeProvider } from '../themeProvider/themeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import RealmCustomProvider from '../providers/Realm';

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <RealmCustomProvider>
          <StatusBar style="light" />
          <Stack screenOptions={{ headerShown: false }} />
        </RealmCustomProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
