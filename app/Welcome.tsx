import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useEffect, useState } from 'react';
import CustomBackgroundImage from '../components/custom/CustomBackgroundImage';
import CustomKeyboardView from '../components/custom/CustomKeyboardView';
import Colors from '../myAssets/colors/Colors';
import { StatusBar } from 'expo-status-bar';
import Login from '@/components/Auth/Login';
import Register from '@/components/Auth/Register';
import GoogleAuth from '@/components/Auth/GoogleAuth';
import { googleConfig } from '@/components/Auth/GoogleConfig';

const Welcome = () => {
  const [login, setLogin] = useState(true);

  function handleFlipCard() {
    setLogin(!login);
  }

  useEffect(() => {
    googleConfig();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <CustomBackgroundImage>
        <CustomKeyboardView>
          <View style={styles.container}>
            <Header />
            <Buttons handleFlipCard={handleFlipCard} login={login} />
            {login ? <Login /> : <Register />}
            <GoogleAuth />
          </View>
        </CustomKeyboardView>
      </CustomBackgroundImage>
    </>
  );
};
//  -- Header
const Header = () => {
  return (
    <View style={styles.box_header}>
      <Text style={styles.textHeader}>League </Text>
      <Text style={styles.textHeader}> Champion</Text>
    </View>
  );
};
// -- Buttons
const Buttons = ({ handleFlipCard, login }) => {
  return (
    <View style={styles.box_switch}>
      {/* Login BTN */}
      <TouchableOpacity onPress={handleFlipCard}>
        <Text
          style={[
            styles.switchText,
            {
              backgroundColor: login ? 'gold' : null,
            },
          ]}
        >
          Login
        </Text>
      </TouchableOpacity>
      {/* Register BTN */}
      <TouchableOpacity onPress={handleFlipCard}>
        <Text
          style={[
            styles.switchText,
            {
              backgroundColor: login ? null : 'gold',
            },
          ]}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  box_header: {
    height: '220@s',
    paddingTop: '30@s',
  },
  textHeader: {
    alignSelf: 'center',

    fontSize: '50@s',
    fontWeight: 'bold',
    color: 'white',
  },
  box_switch: {
    height: '70@s',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  switchText: {
    fontSize: '20@s',
    textAlign: 'center',
    width: '110@vs',
    fontWeight: 'bold',
    borderRadius: '5@s',
    backgroundColor: Colors.gray,
    padding: '4@s',
  },

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
