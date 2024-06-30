import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useContext } from 'react';

import { Link, Stack } from 'expo-router';

import { ms, vs } from 'react-native-size-matters';
import { ThemeContext } from '../../../themeProvider/themeContext';
import MyLeaguesList from '../../../components/myLeagues/MyLeaguesList';

const MyLeagues = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: 'space-around',
      }}
    >
      <Stack.Screen options={{ title: 'My Leagues' }} />

      <View>
        <MyLeaguesList />
      </View>

      <View style={styles.btns}>
        {/* -- Link to Join League  -- */}
        <Link href="leagues/JoinLeague" asChild>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.linkText}>Join League</Text>
          </TouchableOpacity>
        </Link>
        <View style={styles.underLine}></View>
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
  btns: {
    paddingTop: vs(40),
    paddingHorizontal: vs(70),
    gap: vs(5),
  },
  underLine: {
    borderColor: 'lightblue',
    borderWidth: ms(0.5),
    marginHorizontal: ms(45),
  },
  linkText: {
    fontSize: 18,

    fontFamily: ' Roboto_500Medium_Italic',
    textAlign: 'center',
  },
  linkBox: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 5,
  },
});
