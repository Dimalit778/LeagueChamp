import { SafeAreaView, Text } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../themeProvider/themeContext';
import { ms } from 'react-native-size-matters';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  // const { favoriteLeague } = useLeaguesRealm();
  // console.log('favoriteLeague ', favoriteLeague);
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
