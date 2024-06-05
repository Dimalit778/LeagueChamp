import { View, Text } from 'react-native';
import React from 'react';
import { useQuery, useUser } from '@realm/react';

import { FlatList } from 'react-native-gesture-handler';
import { League } from '../../models';
import { vs } from 'react-native-size-matters';
import { LeagueCard } from './LeagueCard';

const MyLeaguesList = () => {
  const user = useUser();
  const leagues = useQuery(League).filtered(`owner_id == '${user.id}'`);
  return (
    <View style={{ paddingTop: vs(20) }}>
      <FlatList
        data={leagues}
        renderItem={({ item }) => <LeagueCard league={item} />}
      />
    </View>
  );
};

export default MyLeaguesList;
