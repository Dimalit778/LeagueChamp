import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '@/themeProvider/themeContext';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';
import PlayersList from '@/components/standingScreen/PlayersList';
import { color } from 'react-native-elements/dist/helpers';

const Standing = () => {
  const { theme } = useContext(ThemeContext);

  const { favoriteLeague } = useLeaguesRealm();
  // console.log('favoriteLeague --> ');
  // console.log(favoriteLeague.users);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Text style={[styles.header, { color: theme.text }]}>Players Table</Text>
      <PlayersList league={favoriteLeague} />
    </View>
  );
};

export default Standing;
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontFamily: 'Roboto_900Black_Italic',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
});
