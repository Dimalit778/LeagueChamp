import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useContext, useMemo, useRef } from 'react';
import { ThemeContext } from '../../themeProvider/themeContext';
import { useAppSelector } from '../../redux/constans/hooks';
import CompStandingList from '../../components/home/CompStandingList';
import { ms } from 'react-native-size-matters';
import { useQuery, useRealm, useUser } from '@realm/react';
import { User } from '../../models';
import { SessionState } from 'realm';

const Home = () => {
  // const { useObject, useQuery } = realmContext
  const { theme } = useContext(ThemeContext);
  const league = useAppSelector((state) => state.league);
  const userData = useAppSelector((state) => state.user);
  console.log('Home - userData ->', userData);
  const realm = useRealm();
  const user = useUser();
  // const connectionState = realm.syncSession.connectionState;
  // const users = useQuery(User);

  console.log('Home ----');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: ms(13),
        backgroundColor: theme.background,
      }}
    >
      <Text>Home</Text>
      {/* <CompStandingList value={{ name: league.name, code: league.code }} /> */}
    </SafeAreaView>
  );
};
export default Home;
