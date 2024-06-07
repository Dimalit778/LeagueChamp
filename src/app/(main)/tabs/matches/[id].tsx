import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const MatchesTable = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>table match ,{id}</Text>
    </View>
  );
};

export default MatchesTable;
