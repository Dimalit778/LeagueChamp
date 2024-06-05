import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CompCard } from './CompCard';

const renderListHeader = () => (
  <View style={styles.listItem}>
    <Image source={{ uri: leagueData.emblem }} style={styles.emblem} />
    <View style={{}}>
      <Text style={styles.headerText}>{leagueData.name}</Text>
    </View>
  </View>
);

const CompStandingList = () => {
  return (
    <View style={styles.list}>
      <FlatList
        data={leagueStandings}
        renderItem={({ item }) => <CompCard league={item} />}
        ListHeaderComponent={renderListHeader}
      />
    </View>
  );
};

export default CompStandingList;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  emblem: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  list: {
    borderWidth: 2,
    borderColor: 'black',
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
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
