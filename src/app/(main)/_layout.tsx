import React, { useContext, useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { ThemeContext } from '../../themeProvider/themeContext';
import 'react-native-get-random-values';
import CustomDrawer from '../../components/customDrawer/CustomDrawer';
import { vs } from 'react-native-size-matters';

export default function Layout() {
  const { theme } = useContext(ThemeContext);
  console.log('Drawer Layout');
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: theme.navbar,
          height: vs(75),
        },
        headerTintColor: theme.text,
      }}
    >
      <Drawer.Screen name="tabs" options={{ headerShown: false }} />
      <Drawer.Screen name="MyLeagues" options={{ headerTitle: 'My Leagues' }} />
      <Drawer.Screen name="Profile" options={{ headerTitle: 'Profile' }} />
      <Drawer.Screen name="Settings" options={{ headerTitle: 'Settings' }} />
    </Drawer>
  );
}
