import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'expo-router';

import { vs } from 'react-native-size-matters';
import { ThemeContext } from '../../themeProvider/themeContext';
import MyLeaguesList from '../../components/myLeagues/MyLeaguesList';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { League, User } from '../../models';
import { BSON } from 'realm';

//@ ---> Leagues Page
const MyLeagues = () => {
  const { theme } = useContext(ThemeContext);
  const user = useUser();
  const realm = useRealm();
  const [myLeagues, setMyLeagues] = useState([]);

  const currentUser = useObject(User, new BSON.ObjectId(user.customData._id));
  useEffect(() => {
    realm.subscriptions.update((mutableSubs) => {
      mutableSubs.add(realm.objects(League));
    });
    currentUser.leagues.map((league) => {
      setMyLeagues((myLeagues) => [...myLeagues, league]);
    });
  }, [realm, currentUser]);
  const leagues = useQuery(League);
  console.log('leagues =m--->', myLeagues);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      {/* MyLeagues */}
      <MyLeaguesList />
      {/* BUTTONS */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: vs(40),
        }}
      >
        {/* -- Link to Join League  -- */}
        <Link href="league/JoinLeague" asChild>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.linkText}>Join League</Text>
          </TouchableOpacity>
        </Link>

        {/* -- Link to Create League  -- */}
        <Link href="league/AddLeague" asChild>
          <Pressable style={styles.linkBox}>
            <Text style={styles.linkText}>Create League</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
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
