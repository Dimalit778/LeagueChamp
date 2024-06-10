// ICONS
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, Tabs, usePathname } from 'expo-router';
import React, { useContext } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from '../../themeProvider/themeContext';
import TabsHeader from '../../components/header/TabsHeader';
import { Tab } from 'react-native-elements';

const TabsLayout = () => {
  const { theme } = useContext(ThemeContext);

  const pathname = usePathname();
  console.log('Layout tabs ----');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="black" />
      <TabsHeader />
      <Tabs
        screenOptions={{
          headerShown: false,
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
        {/* <Tabs.Screen name="Modal" options={{ href: null }} /> */}
        {/*//@ --> MATCHES SCREEN <-- */}
        <Tabs.Screen
          name="Matches"
          options={{
            title: 'Matches',
            tabBarIcon: ({ focused, size }) =>
              focused ? (
                <Ionicons name="football-outline" size={size} color="gold" />
              ) : (
                <Ionicons name="football-outline" size={size} color="gray" />
              ),
          }}
        />

        {/*//@ --> STANDING SCREEN <-- */}
        <Tabs.Screen
          name="Standing"
          options={{
            title: 'Standing',
            tabBarIcon: ({ focused, size }) =>
              focused ? (
                <SimpleLineIcons name="chart" size={size} color="gold" />
              ) : (
                <SimpleLineIcons name="chart" size={size} color="gray" />
              ),
          }}
        />
        {/*//@ --> MY GAMES SCREEN <-- */}
        <Tabs.Screen
          name="MyGames"
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
    </SafeAreaView>
  );
};

export default TabsLayout;
