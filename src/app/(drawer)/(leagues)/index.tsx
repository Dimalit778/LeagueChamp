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

import { Link, Stack } from 'expo-router';
import { useQuery, useRealm, useUser } from '@realm/react';

import { League } from '../../../models/League';
import { ShowLeagues } from '../../../components/ShowLeagues';
import { ThemeContext } from '../../../themeProvider/themeContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { getLeague } from '../../../store/leagueActions';

//@ ---> Leagues Page
const index = () => {
  const { theme } = useContext(ThemeContext);
  // const { league } = useSelector((state: RootState) => state.league);
  const user = useUser();

  const leagues = useQuery(League).filtered(`owner_id == '${user.id}'`);
  useEffect(() => {
    let t = getLeague();
    console.log('TTT ', t);
  }, []);

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
