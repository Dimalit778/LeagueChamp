import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useContext, useEffect } from 'react';

import { Link } from 'expo-router';
import { useQuery, useUser } from '@realm/react';

import { League } from '../../../models/League';
import { ThemeContext } from '../../../themeProvider/themeContext';
import { ShowLeagues } from '../../../components/leagues/ShowLeagues';
import { vs } from 'react-native-size-matters';

//@ ---> Leagues Page
const index = () => {
  const { theme } = useContext(ThemeContext);
  const user = useUser();
  const leagues = useQuery(League).filtered(`owner_id == '${user.id}'`);
  console.log('League index  ');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={{ paddingTop: vs(20), height: vs(250) }}>
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
          paddingTop: vs(20),
        }}
      >
        {/* -- Link to Join League  -- */}
        <Link href="JoinLeague" asChild>
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
