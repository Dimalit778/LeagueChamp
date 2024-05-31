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

import { s, vs } from 'react-native-size-matters';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface LeagueData {
  name: string;
  emblem: string;
}
const index = () => {
  // const currentLeague = useAppSelector((state) => state.league.data);
  // console.log('Tabs index');
  const [refreshing, setRefresh] = useState(false);
  const [leagueStandings, setLeagueStandings] = useState([]);
  const [leagueData, setLeagueData] = useState<LeagueData>({} as LeagueData);
  const [leagueCode, setLeagueCode] = useState('');
  const [loading, setLoading] = useState(true);

  const getKey = async (callback) => {
    let key = await AsyncStorage.getItem('LeagueCode');
    setLeagueCode(key);
    callback(key);
  };
  useEffect(() => {
    const fetchLeagueStanding = async () => {
      try {
        await getKey(async (key) => {
          if (key) {
            const data = await getLeagueStanding(key);
            setLeagueData(data.competition);
            setLeagueStandings(data.standings[0].table);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchLeagueStanding();
  }, [loading]);

  const renderListHeader = () => (
    <View style={styles.listItem}>
      <Image source={{ uri: leagueData.emblem }} style={styles.emblem} />
      <View style={{}}>
        <Text style={styles.headerText}>{leagueData.name}</Text>
      </View>
    </View>
  );
  const LeagueCard = ({ league }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.column}>{league.position}</Text>
        <Text style={styles.column}>{league.team.shortName}</Text>
        <Image
          source={{ uri: league.team.crest }}
          style={{ height: 25, width: 25 }}
        />

        <Text style={styles.column}>{league.points}</Text>
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator style={styles.activityIndicator} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.list}>
        <FlatList
          data={leagueStandings}
          renderItem={({ item }) => <LeagueCard league={item} />}
          ListHeaderComponent={renderListHeader}
        />
      </View>
    </SafeAreaView>
  );
};
export default index;

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
