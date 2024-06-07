import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useContext } from 'react';

import CompStandingList from '../../../components/home/CompStandingList';
import { ms } from 'react-native-size-matters';
import { ThemeContext } from '../../../themeProvider/themeContext';
import { useAppSelector } from '../../../redux/constans/hooks';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const league = useAppSelector((state) => state.league);

  console.log('Home ----');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: ms(13),
        backgroundColor: theme.background,
      }}
    >
      <CompStandingList value={{ name: league.name, code: league.code }} />
    </SafeAreaView>
  );
};
export default Home;
