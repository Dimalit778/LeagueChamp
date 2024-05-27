import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

//@ ---> Leagues Page
const index = () => {
  const league = useSelector((state: RootState) => state.league.name);
  console.log('Home ', league);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{}}>
        <Text style={{ fontSize: 32, textAlign: 'center' }}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  linkText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gold',
  },
  linkBox: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
});
