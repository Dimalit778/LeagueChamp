import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useContext, useMemo, useRef } from 'react';
import { ThemeContext } from '../../themeProvider/themeContext';
import { useAppSelector } from '../../redux/constans/hooks';
import CompStandingList from '../../components/home/CompStandingList';
import { ms } from 'react-native-size-matters';

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
      <Text>Home</Text>
      {/* <CompStandingList value={{ name: league.name, code: league.code }} /> */}
    </SafeAreaView>
  );
};
export default Home;
