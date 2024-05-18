import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useContext } from 'react';

import { Link, Stack } from 'expo-router';
import { useQuery, useRealm, useUser } from '@realm/react';

import { League } from '../../../models/League';
import { ShowLeagues } from '../../../components/ShowLeagues';
import { ThemeContext } from '../../../themeProvider/themeContext';

//@ ---> Leagues Page
const index = () => {
  const { theme } = useContext(ThemeContext);
  const user = useUser();
  // const realm = useRealm();
  // const users = useQuery(User);
  const leagues = useQuery(League).filtered(`owner_id == '${user.id}'`);
  // const league = leagues.findOne('userId ':userId);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={{}}>
        <Text style={{ fontSize: 32, textAlign: 'center' }}>My Leagues</Text>
      </View>
      {/* LEAGUES LIST */}
      <View style={{ height: '40%' }}>
        <FlatList
          data={leagues}
          renderItem={({ item }) => <ShowLeagues league={item} />}
        />
      </View>
      {/* BUTTONS */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        {/* -- Link to Join League  -- */}
        <Link href="leagues/Join" asChild>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.linkText}>Join League</Text>
          </TouchableOpacity>
        </Link>

        {/* -- Link to Create League  -- */}
        <Link href="AddLeague" asChild>
          <Pressable style={styles.linkBox}>
            <Text style={styles.linkText}>Create League</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default index;

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