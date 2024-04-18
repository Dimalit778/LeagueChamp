import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
export default function LoadingBall() {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        style={{ height: 250 }}
        source={require('../myAssets/animations/loadingBall.json')}
        autoPlay
        loop
      />
    </View>
  );
}
