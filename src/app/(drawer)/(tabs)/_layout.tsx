// ICONS
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Tabs } from 'expo-router';

import React, { useContext, useEffect } from 'react';

import { DrawerToggleButton } from '@react-navigation/drawer';
import SwitchTheme from '../../../themeProvider/SwitchBtn';
import { ThemeContext } from '../../../themeProvider/themeContext';
import { useUser } from '@realm/react';

const TabsLayout = () => {
  const { theme } = useContext(ThemeContext);
  // const user = useUser();
  // const { leagues } = user.customData;
  // console.log(user.customData);
  // console.log(leagues);
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerLeft: () => <DrawerToggleButton tintColor={theme.text} />,
        headerRight: () => <SwitchTheme onPress={() => 'onPress'} />,
        headerStyle: {
          backgroundColor: theme.navbar,
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // -- > BOTTOM TABS
        tabBarStyle: {
          backgroundColor: theme.navbar,
        },

        tabBarLabelStyle: {
          color: 'grey',
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      {/*//@ --> MATCHES SCREEN <-- */}
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="football-outline" size={32} color="gold" />
            ) : (
              <Ionicons name="football-outline" size={28} color="gray" />
            ),
        }}
      />

      {/*//@ --> STANDING SCREEN <-- */}
      <Tabs.Screen
        name="standing"
        options={{
          title: 'Standing',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SimpleLineIcons name="chart" size={30} color="gold" />
            ) : (
              <SimpleLineIcons name="chart" size={28} color="gray" />
            ),
        }}
      />
      {/*//@ --> MY GAMES SCREEN <-- */}
      <Tabs.Screen
        name="myGames"
        options={{
          title: 'My Games',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="target-account"
                size={32}
                color="gold"
              />
            ) : (
              <MaterialCommunityIcons
                name="target-account"
                size={28}
                color="gray"
              />
            ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="home" size={32} color="gold" />
            ) : (
              <FontAwesome name="home" size={28} color="gray" />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
