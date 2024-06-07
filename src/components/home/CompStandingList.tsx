import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CompetitionCard } from './CompetitonCard';
import { useAppDispatch, useAppSelector } from '../../redux/constans/hooks';
import { getLeagueStanding } from '../../api/footballApi';
import { setLeagueNameAndEmblem } from '../../redux/reducers/leagueReducer';

const CompStandingList = ({ value }) => {
  const [leagueStandings, setLeagueStandings] = useState([]);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);
  // console.log(' ========1 =============', leagueStandings);
  useEffect(() => {
    setLeagueStandings([]);
    console.log('1');
    const fetchLeagueStanding = async () => {
      console.log('2');
      const data = await getLeagueStanding(value.code);
      dispatch(setLeagueNameAndEmblem(data.competition));
      setLeagueStandings(data.standings[0].table);
    };
    console.log('3');
    fetchLeagueStanding();
    console.log('4');
    setLoading(false);
  }, [value, dispatch]);
  const renderListHeader = React.memo(() => (
    <View style={[styles.row, styles.headerRow]}>
      <View style={styles.positionColumn}>
        <Text style={styles.headerText}>#</Text>
      </View>
      <View style={styles.teamColumn}>
        <Text style={styles.headerText}>TEAM</Text>
      </View>
      <View style={styles.statsColumn}>
        <Text style={styles.headerText}>MP</Text>
        <Text style={styles.headerText}>W</Text>
        <Text style={styles.headerText}>D</Text>
        <Text style={styles.headerText}>L</Text>
        <Text style={styles.headerText}>PTS</Text>
      </View>
    </View>
  ));
  return (
    <View style={styles.list}>
      {leagueStandings.length === 0 ? (
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={leagueStandings}
          renderItem={({ item }) => <CompetitionCard competition={item} />}
          ListEmptyComponent={
            <ActivityIndicator style={styles.activityIndicator} />
          }
          ListHeaderComponent={renderListHeader}
          stickyHeaderIndices={[0]}
          keyExtractor={(item) => item.team.id.toString()}
        />
      )}
    </View>
  );
};

export default memo(CompStandingList);
const styles = StyleSheet.create({
  list: {
    flex: 1,

    backgroundColor: '#fff',
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
