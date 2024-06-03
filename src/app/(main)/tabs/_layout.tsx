// ICONS
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Tabs, usePathname, useRouter } from 'expo-router';

import React, { useContext, useEffect } from 'react';

import { DrawerToggleButton } from '@react-navigation/drawer';
import SwitchTheme from '../../../themeProvider/SwitchBtn';
import { ThemeContext } from '../../../themeProvider/themeContext';
import { useQuery, useUser } from '@realm/react';
import { User } from '../../../models';

const TabsLayout = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const user = useUser();
  const userApp = useQuery(User).filtered(`userId == '${user.id}'`);
  console.log('tabs home ', userApp);
  /// CHANGE THIS ______
  const leagues = user.customData.leagues[0];

  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
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
      {/*//@ --> Home SCREEN <-- */}
      <Tabs.Screen
        name="Home"
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
