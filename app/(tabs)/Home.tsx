import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useContext, useMemo, useRef } from 'react';
import { ThemeContext } from '../../themeProvider/themeContext';
import { useAppSelector } from '../../redux/constans/hooks';
import CompStandingList from '../../components/home/CompStandingList';
import { ms } from 'react-native-size-matters';
import { useQuery, useRealm, useUser } from '@realm/react';
import { League, User } from '../../models';
import { SessionState } from 'realm';
import Toast from 'react-native-toast-message';
import { useUserRealm } from '@/hooks/useUserRealm';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { leagues } = useLeaguesRealm();

  const leg = useQuery(League);
  console.log('leagues -------->', leg);
  // console.log('MY -------->', leagues);
  // const league = useAppSelector((state) => state.league);
  // const userData = useAppSelector((state) => state.user);
  // console.log('Home - userData ->', userData);

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
