import 'react-native-get-random-values';
import React from 'react';
import { Slot, Stack } from 'expo-router';
import RealmCustomProvider from '../providers/Realm';
import { ThemeProvider } from '../themeProvider/themeContext';

const RootLayout = () => {
  return (
    <ThemeProvider>
      <RealmCustomProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </RealmCustomProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
