import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const image = {
  uri: 'https://w0.peakpx.com/wallpaper/355/120/HD-wallpaper-champions-league-icio-uefa-champions-league.jpg',
};
const CustomBackgroundImage = ({ children }: PropsWithChildren) => {
  return (
    <ImageBackground source={image} style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export default CustomBackgroundImage;
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch',
  },
});
