import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { vs } from 'react-native-size-matters';
import { LeagueCard } from './LeagueCard';

import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';

const MyLeaguesList = () => {
  const { userLeagues } = useLeaguesRealm();

  if (userLeagues.length === 0)
    return (
      <Text style={{ textAlign: 'center', fontSize: 24, paddingTop: vs(20) }}>
        No Leagues
      </Text>
    );
  return (
    <View style={{ paddingTop: vs(20) }}>
      <FlatList
        data={userLeagues}
        renderItem={({ item }) => <LeagueCard league={item} />}
      />
    </View>
  );
};

export default MyLeaguesList;
