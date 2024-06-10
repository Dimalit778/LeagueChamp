import { View, Text, FlatList } from 'react-native';
import React from 'react';

const Matches = () => {
  const list = Array.from({ length: 39 }, (_, i) => i + 1);
  const roundNumber = (item) => {
    <View style={{ backgroundColor: 'red', gap: 5 }}>
      <Text>{item}</Text>
    </View>;
  };
  return (
    <View>
      <Text>matches</Text>
      {/* <FlatList
        data={list}
        renderItem={({ item }) => {
          roundNumber;
        }}
        stickyHeaderIndices={[0]}
        // keyExtractor={(item) => item.team.id.toString()}
      /> */}
    </View>
  );
};

export default Matches;
