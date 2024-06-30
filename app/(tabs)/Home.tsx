import { SafeAreaView, Text } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../themeProvider/themeContext';
import { ms } from 'react-native-size-matters';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';
import CompStandingList from '@/components/home/CompStandingList';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { favoriteLeague } = useLeaguesRealm();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: ms(13),
        backgroundColor: theme.background,
      }}
    >
      <Text>Home</Text>

      <CompStandingList
        value={{ name: favoriteLeague.name, code: favoriteLeague.code }}
      />
    </SafeAreaView>
  );
};
export default Home;
// 6680601c3b4cbf0daef859e9 leage
// userId - 6680600a0605ad594fc95509
// _id -6680600b0605ad594fc9559b
