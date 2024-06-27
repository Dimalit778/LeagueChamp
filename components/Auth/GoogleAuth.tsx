import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { ms, vs } from 'react-native-size-matters';

import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';
import { Button } from 'react-native-elements/dist/buttons/Button';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
// import { useAuth } from '@realm/react';

// WebBrowser.maybeCompleteAuthSession();

const GoogleAuth = () => {
  // const { logInWithGoogle, result } = useAuth();
  // console.log('result   ->', result);
  const [user, setUser] = useState({
    user: null,
    token: null,
  });
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      '198269186110-0t4j7h3t8q6o2femlel68hp2auuvmna5.apps.googleusercontent.com',
    androidClientId:
      '198269186110-0cu52inq22e5q1lukqlha50l8n0gqb9n.apps.googleusercontent.com',
  });

  const getCurrentUser = async () => {
    const currentUser = GoogleSignin.getCurrentUser();
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo ->', userInfo);
      // const token = await GoogleSignin.getTokens();
      // console.log('token ->', token);
      // logInWithGoogle({ idToken: token.accessToken });
      // setUser({ user: userInfo.user, token: token.accessToken });
    } catch (error) {
      if (isErrorWithCode(error)) {
        console.log(' error code ', error.code, 'error', error.message);
        // here you can safely read `error.code` and TypeScript will know that it has a value
      } else {
        console.log(' error  ', error);
        // this error does not have a `code`, and does not come from the Google Sign in module
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
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
        onPress={() => promptAsync()}
        style={{ width: ms(200), height: ms(50) }}
      />
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export default GoogleAuth;
