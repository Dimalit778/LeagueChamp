import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { ms, vs } from 'react-native-size-matters';
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import * as WebBrowser from 'expo-web-browser';

import { Button } from 'react-native-elements';
import { useAuth } from '@realm/react';

const GoogleAuth = () => {
  const { logInWithGoogle, result } = useAuth();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  console.log('result');
  console.log(result);
  GoogleSignin.configure({
    webClientId:
      '827466256996-26crehcu7hdmp6kclit69db9daokff9c.apps.googleusercontent.com',
  });
  const login = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      // console.log('user', user);
      logInWithGoogle({ idToken });
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            break;
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();

      setUser({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  const getTokens = async () => {
    try {
      const token = await GoogleSignin.getTokens();
      console.log('token');
      console.log(token);
      setToken({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: vs(20),
        gap: vs(10),
      }}
    >
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => login()}
        style={{ width: ms(200), height: ms(50) }}
      />
      <Button title="sign out" onPress={() => signOut()} />
      <Button title="gettokens" onPress={() => getTokens()} />
    </View>
  );
};

export default GoogleAuth;
