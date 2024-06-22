import { View, Text } from 'react-native';
import React, { useState } from 'react';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';
import { ms, vs } from 'react-native-size-matters';

const GoogleAuth = () => {
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);
  const signIn = async () => {
    console.log('Pressed sign in');

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
      setUserInfo(userInfo);
      setError(null);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: vs(20),
      }}
    >
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          signIn();
        }}
        style={{ width: ms(200), height: ms(50) }}
        // disabled={false}
      />
    </View>
  );
};

export default GoogleAuth;
