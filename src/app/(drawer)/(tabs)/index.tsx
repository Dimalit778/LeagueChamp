import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LeagueTable from '../../../components/tables/LeagueTable';

import { useAppSelector } from '../../../redux/constans/hooks';
import { getLeagueStanding } from '../../../api/footballApi';
import { LeagueCard } from '../../../components/tables/LeagueCard';
import { Image } from 'expo-image';

const index = () => {
  const leagueData = useAppSelector((state) => state.league.leagueData);
  const [refreshing, setRefresh] = useState(false);
  const [league, setLeague] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeagueStanding = async () => {
      try {
        const data = await getLeagueStanding(leagueData.code);
        setLeague(data.standings);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchLeagueStanding();
  }, [leagueData.code]);
  // console.log('data.standing ', league);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 32, textAlign: 'center' }}>Home</Text>
        {/* <FlatList
          data={league}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <LeagueCard league={item} />}
        /> */}
        <ScrollView
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          <FlatList
            data={league}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <LeagueCard league={item} />}
          />
        </ScrollView>
        {loading && (
          <ActivityIndicator
            size="large"
            color="#3353dd"
            style={styles.activityIndicator}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
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
