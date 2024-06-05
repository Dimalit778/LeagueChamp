import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

import { ThemeContext } from '../../themeProvider/themeContext';
import { useAuth, useUser } from '@realm/react';
import { FontAwesome } from '@expo/vector-icons';
import { ScaledSheet, ms, s, vs } from 'react-native-size-matters';
import { Button } from 'react-native-elements';
import 'react-native-get-random-values';
import CustomDrawer from '../../components/customDrawer/CustomDrawer';

export default function Layout() {
  const { theme } = useContext(ThemeContext);
  console.log('Drawer Layout ');
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.navbar,
        },
        headerTintColor: theme.text,
      }}
    >
      <Drawer.Screen name="tabs" options={{ headerShown: false }} />
    </Drawer>
  );
}
