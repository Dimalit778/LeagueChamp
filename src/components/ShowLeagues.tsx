import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, StyleSheet, View, Touchable, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { getLeague } from '../store/leagueActions';

export const ShowLeagues = ({ league }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  console.log('Data ', league);

  return (
    <Pressable onPress={() => dispatch(getLeague())}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 20,
          gap: 20,
        }}
      >
        <Text style={styles.listText}>{league.leagueName}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'grey',
    overflow: 'hidden',
    padding: 15,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 15,
    color: 'white',
    width: '60%',
  },
});
