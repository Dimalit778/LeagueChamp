import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

import { Button } from 'react-native-elements';

import HomeAnimation from '../components/HomeAnimation';
import { useSharedValue } from 'react-native-reanimated';
import AuthForm, { LOG_REG } from '../components/AuthForm';

const image = {
  uri: 'https://w0.peakpx.com/wallpaper/355/120/HD-wallpaper-champions-league-icio-uefa-champions-league.jpg',
};
const Welcome = () => {
  const authForm = useSharedValue(LOG_REG.login);
  function showLogin() {
    console.log('log ' + LOG_REG.login);
    authForm.value = LOG_REG.login;
  }

  function showRegister() {
    console.log('reg ' + LOG_REG.register);
    authForm.value = LOG_REG.register;
  }
  function handleFlipAuth() {
    console.log(authForm.value);
    if (authForm.value === LOG_REG.login) {
      showRegister();
    } else {
      showLogin();
    }
  }
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
            <AuthForm authForm={authForm} />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ paddingTop: 100 }}
              onPress={handleFlipAuth}
            >
              <Text style={{ fontSize: 24, fontFamily: 'bold' }}>Switch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
{
  /* <View style={{ flex: 1 }}>
{authForms ? (
  <AuthForm authForm={authFrom} />
) : (
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
)}
</View> */
}
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
    paddingTop: 50,
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
