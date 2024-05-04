import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { vs } from 'react-native-size-matters';
import CustomBackgroundImage from './custom/CustomBackgroundImage';
function LoadingBall() {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
          zIndex: 1,
        },
      ]}
    >
      <LottieView
        style={{ height: vs(200) }}
        source={require('../myAssets/animations/loadingBall.json')}
        autoPlay
        loop
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1,
  },
});
function LoadingSplash() {
  return (
    <CustomBackgroundImage>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            zIndex: 1,
          },
        ]}
      >
        <LottieView
          style={{ height: vs(200) }}
          source={require('../myAssets/animations/loadingBall.json')}
          autoPlay
          loop
        />
      </View>
    </CustomBackgroundImage>
  );
}

export { LoadingBall, LoadingSplash };
