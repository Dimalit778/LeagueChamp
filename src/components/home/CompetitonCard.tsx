import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../redux/constans/hooks';

export const CompetitionCard = ({ competition }) => {
  const { name } = useAppSelector((state) => state.league);
  const { position, playedGames, won, draw, lost, points, team } = competition;
  const filterPosition = getPosition(position, name);
  return (
    <View style={styles.row}>
      <View
        style={[
          styles.positionColumn,
          { backgroundColor: filterPosition.color },
        ]}
      >
        <Text
          style={[styles.positionText, { color: filterPosition.textColor }]}
        >
          {position}
        </Text>
      </View>
      <View style={styles.teamColumn}>
        <Image source={{ uri: team.crest }} style={styles.crest} />
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
          {team.shortName}
        </Text>
      </View>
      <View style={styles.statsColumn}>
        <Text style={styles.cellText}>{playedGames}</Text>
        <Text style={styles.cellText}>{won}</Text>
        <Text style={styles.cellText}>{draw}</Text>
        <Text style={styles.cellText}>{lost}</Text>
        <Text style={styles.cellText}>{points}</Text>
      </View>
    </View>
  );
};
//Filter league position by Color
const getPosition = (position: number, name: string) => {
  switch (name) {
    case 'Premier League':
      return {
        color:
          position <= 4
            ? 'blue'
            : position == 5
            ? 'green'
            : position == 6
            ? 'orange'
            : position >= 18
            ? 'red'
            : 'silver',
        textColor: 'white',
      };
    case 'Primera Division':
      return {
        color:
          position <= 4
            ? 'blue'
            : position == 5 || position == 6
            ? 'green'
            : position == 7
            ? 'brown'
            : position >= 18
            ? 'red'
            : 'silver',
        textColor: 'white',
      };
    case 'Serie A':
      return {
        color:
          position <= 5
            ? 'blue'
            : position == 6 || position == 7
            ? 'green'
            : position == 8
            ? 'brown'
            : position >= 18
            ? 'red'
            : 'silver',
        textColor: 'white',
      };
    case 'Ligue 1':
      return {
        color:
          position <= 3
            ? 'blue'
            : position == 4
            ? 'deepskyblue'
            : position == 5 || position == 6
            ? 'green'
            : position == 7
            ? 'orange'
            : position == 16
            ? 'brown'
            : position > 16
            ? 'red'
            : 'silver',
        textColor: 'white',
      };
    case 'Bundesliga':
      return {
        color:
          position <= 5
            ? 'blue'
            : position == 6 || position == 7
            ? 'green'
            : position == 8
            ? 'orange'
            : position == 16
            ? 'brown'
            : position > 16
            ? 'red'
            : 'silver',
        textColor: 'white',
      };
    default:
      return { color: 'silver', textColor: 'black' };
  }
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  positionColumn: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    marginEnd: 10,
    borderRadius: 4,
  },

  teamColumn: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  crest: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  statsColumn: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  positionText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  cellText: {
    fontSize: 13,
  },
});
