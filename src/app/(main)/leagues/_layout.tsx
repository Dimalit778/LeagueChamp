import { Stack } from 'expo-router';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../themeProvider/themeContext';
import { DrawerToggleButton } from '@react-navigation/drawer';

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  console.log('League Layout  ');
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.navbar,
        },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'My Leagues',

          headerLeft: () => <DrawerToggleButton tintColor={theme.text} />,
        }}
      />
      <Stack.Screen
        name="AddLeague"
        options={{ title: 'Create League', headerShown: true }}
      />
      <Stack.Screen
        name="JoinLeague"
        options={{ title: 'Create League', headerShown: true }}
      />
    </Stack>
  );
};

export default Layout;
