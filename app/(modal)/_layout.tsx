import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { Stack } from 'expo-router';
import { ThemeContext } from '../../themeProvider/themeContext';

const _layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.navbar },
        headerTintColor: theme.text,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="MyLeagues" />
      <Stack.Screen name="Settings" />
      <Stack.Screen name="Profile" />
    </Stack>
  );
};

export default _layout;
