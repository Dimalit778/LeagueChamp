import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { ThemeContext } from '../../themeProvider/themeContext';
import { useAppSelector } from '../../redux/constans/hooks';
import CompStandingList from '../../components/home/CompStandingList';
import { ms } from 'react-native-size-matters';
import { useApp, useQuery, useRealm, useUser } from '@realm/react';
import { League, User } from '../../models';
import { SessionState } from 'realm';
import Toast from 'react-native-toast-message';
import { useUserRealm } from '@/hooks/useUserRealm';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';
import { useSelector } from 'react-redux';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { favoriteLeague } = useLeaguesRealm();
  console.log('favoriteLeague ', favoriteLeague);
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
