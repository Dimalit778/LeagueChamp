import { Image, StyleSheet, Text, View } from 'react-native';

export const CompCard = ({ league }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.column}>{league.position}</Text>
      <Text style={styles.column}>{league.team.shortName}</Text>
      <Image
        source={{ uri: league.team.crest }}
        style={{ height: 25, width: 25 }}
      />
      <Text style={styles.column}>{league.points}</Text>
      <Text style={styles.column}>Home page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
