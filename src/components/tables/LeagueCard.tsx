import { useRouter } from 'expo-router';

import { Text, StyleSheet, View, Pressable, Image } from 'react-native';
import { useAppDispatch } from '../../redux/constans/hooks';
import { saveLeagueState } from '../../redux/reducers/leagueReducer';
import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';

export const LeagueCard = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.row}>
      {/* <Text style={styles.column}>{item.stage}</Text>
      <Text style={styles.column}>{item.type}</Text>
      {item.group && <Text style={styles.column}>{item.group}</Text>}
      {item.table.map((tableItem, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.column}>{tableItem.position}</Text>
          <View style={styles.column}>
            <Image
              source={{ uri: tableItem.team.crest }}
              style={styles.column}
            />
          </View>
          <Text style={styles.column}>{tableItem.team.shortName}</Text>
          <Text style={styles.column}>{tableItem.points}</Text>
        </View>
      ))} */}
    </View>
  );
};

const styles = ScaledSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  activityIndicator: {
    alignSelf: 'center',
    position: 'absolute',
    top: 250,
  },
  horizontalScroll: {
    alignItems: 'center',
    marginTop: 30,
    height: 260,
  },
});
