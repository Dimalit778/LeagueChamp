import { useRouter } from 'expo-router';

import { Text, View, Pressable } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';

import { useAppDispatch } from '../../redux/constans/hooks';
import { setLeague } from '../../redux/reducers/leagueReducer';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';
import Toast from 'react-native-toast-message';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from '@/themeProvider/themeContext';
import { useContext, useState } from 'react';

export const LeagueCard = ({ league }) => {
  const { theme } = useContext(ThemeContext);
  const { deleteLeague, setFavoriteLeague } = useLeaguesRealm();
  const router = useRouter();
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useAppDispatch();

  const clickOnLeague = (league: any) => {
    setFavoriteLeague(league);

    router.push('(tabs)/Home');
  };

  // delete the league
  const deleteHandler = (league: any) => {
    deleteLeague(league);
    Toast.show({
      type: 'actionComplete',
      text1: 'League Deleted',
    });
  };

  return (
    <>
      <View style={styles.box}>
        <Pressable onPress={() => clickOnLeague(league)}>
          <Text style={styles.listText}>{league.name}</Text>
        </Pressable>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', gap: 15 }}
        >
          <Pressable
            onPress={() => deleteHandler(league)}
            style={[styles.editBtn, { backgroundColor: 'red' }]}
          >
            <AntDesign name="delete" size={24} color="black" />
          </Pressable>

          <Pressable
            onPress={() => deleteHandler(league)}
            style={[styles.editBtn, { backgroundColor: 'lightskyblue' }]}
          >
            <Feather name="edit" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  box: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15@ms',
    marginRight: '20@ms',
    marginTop: '20@ms',
  },
  editBtn: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 1,
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
