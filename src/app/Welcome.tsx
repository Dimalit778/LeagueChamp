import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { ThemeContext } from '../../themeProvider/themeContext';
import { Button } from 'react-native-elements';

import HomeAnimation from '../components/HomeAnimation';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';

const image = {
  uri: 'https://w0.peakpx.com/wallpaper/355/120/HD-wallpaper-champions-league-icio-uefa-champions-league.jpg',
};
const Welcome = () => {
  const router = useRouter();
  const [authForm, setAuthForm] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Stack.Screen options={{ headerShown: false }} /> */}
      <ImageBackground source={image} style={styles.image}>
        <View style={{ flex: 1 }}>
          <View style={styles.boxHeader}>
            <Text style={styles.textHeader}>League </Text>
            <Text style={styles.textHeader}> Champion</Text>
          </View>
          <View style={{ flex: 1 }}>
            {/* {authForm ? (
              <Reg />
            ) : ( */}
            <>
              <HomeAnimation />
              <View style={styles.boxSection}>
                <Button
                  title="Start "
                  buttonStyle={{
                    backgroundColor: 'black',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 250,
                    height: 150,
                    marginVertical: 10,
                  }}
                  titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                  onPress={() => setAuthForm(true)}
                />
              </View>
            </>
            {/* )} */}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
{
  /* <Button
  title="SIGN UP"
  buttonStyle={{
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  }}
  containerStyle={{
    width: 250,
    // marginHorizontal: 50,
    marginVertical: 10,
  }}
  titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
  onPress={() => setScreen('register')}
/>; */
}
export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  boxHeader: {
    justifyContent: 'center',
    height: '40%',
  },
  textHeader: {
    alignSelf: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'black',

    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 5 },
    textShadowRadius: 5,
  },
  boxSection: {
    flex: 1,
    alignItems: 'center',
  },
});
