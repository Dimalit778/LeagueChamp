import { useRouter } from 'expo-router';

import { Text, View, Pressable } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';
import { useRealm } from '@realm/react';
import { useAppDispatch } from '../../redux/constans/hooks';
import { setLeague } from '../../redux/reducers/leagueReducer';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';
export const LeagueCard = ({ league }) => {
  const { deleteLeague } = useLeaguesRealm();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const realm = useRealm();

  const clickOnLeague = async () => {
    let state = {
      leagueId: league._id.toString(),
      code: league.code,
    };
    dispatch(setLeague(state));
    router.push('tabs/Home');
  };
  // delete the league
  const deleteHandler = (league: any) => {
    deleteLeague(league);
  };
  return (
    <View style={styles.box}>
      <Pressable onPress={() => deleteHandler(league)}>
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
