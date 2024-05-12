import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

//@ ---> Leagues Page
const index = () => {
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
