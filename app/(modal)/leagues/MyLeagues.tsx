import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useContext } from 'react';

import { Link, Stack } from 'expo-router';

import { vs } from 'react-native-size-matters';
import { ThemeContext } from '../../../themeProvider/themeContext';
import MyLeaguesList from '../../../components/myLeagues/MyLeaguesList';

//@ ---> Leagues Page
const MyLeagues = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Stack.Screen options={{ title: 'My Leagues' }} />
      {/* MyLeagues */}
      <View>
        <MyLeaguesList />
      </View>
      {/* BUTTONS */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: vs(40),
        }}
      >
        {/* -- Link to Join League  -- */}
        <Link href="leagues/JoinLeague" asChild>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.linkText}>Join League</Text>
          </TouchableOpacity>
        </Link>

        {/* -- Link to Create League  -- */}
        <Link href="leagues/CreateLeague" asChild>
          <Pressable style={styles.linkBox}>
            <Text style={styles.linkText}>Create League</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default MyLeagues;

const styles = StyleSheet.create({
  linkText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gold',
  },
  linkBox: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
});
