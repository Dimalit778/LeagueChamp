import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
export default function HomeAnimation() {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        style={{ height: 250 }}
        source={require('../myAssets/animations/players.json')}
        autoPlay
        loop
      />
    </View>
  );
}
