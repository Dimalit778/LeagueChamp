import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';

import { Link, Stack } from 'expo-router';
import { useQuery, useRealm } from '@realm/react';

import { League } from '../../../models/League';

//

//@ ---> Leagues Page
const index = () => {
  // const realm = useRealm();
  // const users = useQuery(User);
  const leagues = useQuery(League);
  console.log(leagues);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{}}>
        <Text style={{ fontSize: 32, textAlign: 'center' }}>My Leagues</Text>
      </View>
      {/* LEAGUES LIST */}
      <View style={{ height: '40%' }}>
        {/* <FlatList
          data={leagues}
          renderItem={({ item }) => <ShowLeauges league={item} />}
        /> */}
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
