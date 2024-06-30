import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import PlayerCard from './PlayersCard';

const PlayersList = ({ league }) => {
  const users = league.users;

  const renderListHeader = React.memo(() => (
    <View style={[styles.row, styles.headerRow]}>
      <View style={styles.positionColumn}>
        <Text style={styles.headerText}>#</Text>
      </View>

      <View style={styles.statsColumn}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Email</Text>
        <Text style={styles.headerText}>Pts</Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.list}>
      {users[0].length === 0 ? (
        (console.log('no players'),
        (<ActivityIndicator style={styles.activityIndicator} />))
      ) : (
        <FlatList
          data={users}
          renderItem={({ item, index }) => (
            <PlayerCard user={item} i={index} key={index} />
          )}
          ListEmptyComponent={
            <ActivityIndicator style={styles.activityIndicator} />
          }
          ListHeaderComponent={renderListHeader}
          stickyHeaderIndices={[0]}
        />
      )}
    </View>
  );
};

export default PlayersList;
const styles = StyleSheet.create({
  list: {
    flex: 0.8,
    marginHorizontal: 30,
    borderWidth: 1,
  },
  headerText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  headerRow: {
    backgroundColor: 'gray',
  },
  positionColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
  },
  teamColumn: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsColumn: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    marginTop: 20,
  },
});
