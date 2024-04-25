import { Text, TouchableOpacity, View } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

import { useEffect, useState } from 'react';
import Colors from '../myAssets/colors/Colors';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import CustomBackgroundImage from '../components/CustomBackgroundImage';
import CustomKeyboardView from '../components/CustomKeyboardView';

const Welcome = () => {
  const [showLogin, setShowLogin] = useState(true);

  // function showLogin() {
  //   authCard.value = LOG_REG.login;
  // }
  // function showRegister() {
  //   authCard.value = LOG_REG.register;
  // }
  function handleFlipCard() {
    setShowLogin(!showLogin);
  }

  return (
    <CustomBackgroundImage>
      <CustomKeyboardView>
        {/* Header */}
        <View style={styles.container}>
          <View style={styles.box_header}>
            <Text style={styles.textHeader}>League </Text>
            <Text style={styles.textHeader}> Champion</Text>
          </View>
          {/* switch Button */}
          <View style={styles.box_switch}>
            {/* Login BTN */}
            <TouchableOpacity onPress={handleFlipCard}>
              <Text
                style={[
                  styles.switchText,
                  {
                    backgroundColor: showLogin ? 'gold' : null,
                    color: showLogin ? 'black' : 'lightgrey',
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
                    backgroundColor: showLogin ? null : 'gold',
                    color: showLogin ? 'lightgrey' : 'black',
                  },
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box_authForm}>
            {showLogin ? <LoginForm /> : <RegisterForm />}
          </View>
        </View>
      </CustomKeyboardView>
    </CustomBackgroundImage>
  );
};

export default Welcome;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: '40@ms',
  },
  box_header: {
    height: '220@s',
  },
  box_switch: {
    height: '70@s',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box_authForm: {
    marginHorizontal: 30,
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

  textHeader: {
    alignSelf: 'center',
    paddingTop: '20@s',
    fontSize: '50@s',
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 5 },
    textShadowRadius: 5,
  },
});