import { View, Text } from 'react-native';
import 'react-native-get-random-values';
import React from 'react';
import { Slot, Stack } from 'expo-router';
import RealmCustomProvider from '../providers/Realm';

const RootLayout = () => {
  return (
    <RealmCustomProvider>
      <Stack screenOptions={{}}></Stack>
    </RealmCustomProvider>
  );
};

export default RootLayout;
