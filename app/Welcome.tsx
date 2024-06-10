import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useState } from 'react';
import CustomBackgroundImage from '../components/custom/CustomBackgroundImage';
import CustomKeyboardView from '../components/custom/CustomKeyboardView';
import AuthForm from '../components/AuthForm';
import Colors from '../myAssets/colors/Colors';

const Welcome = () => {
  const [login, setLogin] = useState(true);

  function handleFlipCard() {
    setLogin(!login);
  }

  return (
    <>
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
            <View style={styles.box_authForm}>
              <AuthForm login={login} />
            </View>
          </View>
        </CustomKeyboardView>
      </CustomBackgroundImage>
    </>
  );
};

export default Welcome;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
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
    height: '300@s',
    marginHorizontal: 30,
    position: 'relative',
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
