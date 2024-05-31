import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { useAppDispatch } from '../../redux/constans/hooks';
import { saveLeagueState } from '../../redux/reducers/leagueReducer';
import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';
import { useRealm } from '@realm/react';
export const ShowLeagues = ({ league }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const realm = useRealm();

  const clickOnLeague = async () => {
    let state = {
      ownerId: league.owner_id,
      leagueId: league._id.toString(),
      name: league.leagueName,
    };
    try {
      await AsyncStorage.setItem('LeagueCode', league.code);
      dispatch(saveLeagueState(state));
    } catch (error) {
      console.log('AsyncStorage error', error);
    }

    router.push('/(tabs)');
  };
  // delete the league
  const deleteLeague = (league: any) => {
    realm.write(() => {
      realm.delete(league);
    });
  };
  return (
    <View style={styles.box}>
      <Pressable onPress={() => deleteLeague(league)}>
        <MaterialIcons name="delete-forever" size={48} color="red" />
      </Pressable>
      <Pressable style={{}} onPress={() => clickOnLeague()}>
        <Text style={styles.listText}>{league.leagueName}</Text>
      </Pressable>
    </View>
  );
};

const styles = ScaledSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15@ms',
    marginRight: '20@ms',
    marginTop: '20@ms',
  },
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
    width: '180@s',
  },
});
