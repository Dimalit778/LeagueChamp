import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const PlayerCard = ({ user, i }: { user: any; i: number }) => {
  const { name, image, email } = user;

  return (
    <View style={styles.row}>
      <View style={styles.statsColumn}>
        <Text style={styles.cellText}>{i + 1}</Text>
      </View>
      <View style={styles.statsColumn}>
        <Text style={styles.cellText}>{name}</Text>
      </View>
      <View style={styles.statsColumn}>
        <Text style={styles.cellText}>{email}</Text>
      </View>
      <View style={styles.statsColumn}>
        <Text style={styles.cellText}>'points'</Text>
      </View>
    </View>
  );
};

export default PlayerCard;
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
