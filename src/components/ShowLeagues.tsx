import { useRouter } from 'expo-router';

import { Text, StyleSheet, View, Touchable, Pressable } from 'react-native';

import { saveLeagueState } from '../redux/reducers/leagueReducer';
import { useAppDispatch } from '../redux/constans/hooks';

export const ShowLeagues = ({ league }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const clickOnLeague = () => {
    let toSave = {
      ownerId: league.owner_id,
      leagueId: league._id.toString(),
      name: league.leagueName,
      code: league.code,
    };
    dispatch(saveLeagueState(toSave));
    router.push('/(drawer)/(tabs)');
  };
  return (
    <Pressable onPress={() => clickOnLeague()}>
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
