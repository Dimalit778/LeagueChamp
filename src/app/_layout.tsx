import 'react-native-get-random-values';
import React from 'react';
import { Slot, Stack } from 'expo-router';
import RealmCustomProvider from '../providers/Realm';
import { ThemeProvider } from '../themeProvider/themeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

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
