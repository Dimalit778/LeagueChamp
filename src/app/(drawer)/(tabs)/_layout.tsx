import { View, Text } from 'react-native';
import React from 'react';
import { Tabs, router } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor="#000" />,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
          tabBarLabel: 'Feed',
          headerTitle: 'Feed',
          headerRight: () => (
            <Button onPress={() => router.push('feed/new')} title="Add Post" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarLabel: 'Profile',
          headerTitle: 'Profile',
        }}
      />
    </Tabs>
  );
};

export default _layout;
