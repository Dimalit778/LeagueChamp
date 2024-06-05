import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { useAppSelector } from '../../../redux/constans/hooks';
import { getLeagueStanding } from '../../../api/footballApi';

interface LeagueData {
  name: string;
  emblem: string;
}
const Home = () => {
  const value = useAppSelector((state) => state.league);

  // console.log('Tabs index');
  const [refreshing, setRefresh] = useState(false);
  const [leagueStandings, setLeagueStandings] = useState([]);
  const [leagueData, setLeagueData] = useState<LeagueData>({} as LeagueData);
  const [leagueCode, setLeagueCode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeagueStanding = async () => {
      try {
        if (value) {
          const data = await getLeagueStanding(value.code);
          setLeagueData(data.competition);
          setLeagueStandings(data.standings[0].table);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchLeagueStanding();
  }, [loading]);

  if (loading) {
    return <ActivityIndicator style={styles.activityIndicator} />;
  }
  return <SafeAreaView style={{ flex: 1 }}></SafeAreaView>;
};
export default Home;

const styles = StyleSheet.create({
  activityIndicator: {
    alignSelf: 'center',
    position: 'absolute',
    top: 250,
  },
});
