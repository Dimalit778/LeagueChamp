import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useContext, useEffect } from 'react';

import { Link, Stack } from 'expo-router';

import { vs } from 'react-native-size-matters';
import { ThemeContext } from '../../../themeProvider/themeContext';
import MyLeaguesList from '../../../components/myLeagues/MyLeaguesList';
import { useRealm, useUser } from '@realm/react';
import { ObjectId } from 'bson';
//@ ---> Leagues Page
const MyLeagues = () => {
  const { theme } = useContext(ThemeContext);
  const user = useUser().customData;
  const realm = useRealm();
  useEffect(() => {
    const updateSubscriptions = async () => {
      await realm.subscriptions.update((mutableSubs) => {
        user.leagues?.map((id: string) => {
          mutableSubs.add(
            realm.objects('League').filtered('_id == $0', new ObjectId(id))
          );
        });
      });
    };
    updateSubscriptions();
  }, [realm, user]);

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
        <Link href="myLeagues/JoinLeague" asChild>
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
