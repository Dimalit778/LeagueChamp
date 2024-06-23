import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { ms, vs } from 'react-native-size-matters';

import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';
import { Button } from 'react-native-elements/dist/buttons/Button';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);
  const [state, setState] = useState({ hasPreviousSignIn: false });

  useEffect(() => {
    console.log('GoogleAuth useEffect');
    GoogleSignin.configure({
      webClientId:
        '198269186110-9ikvkgjtavcin08e74gcrm70sj3jdh55.apps.googleusercontent.com',
    });
  }, []);
  const hasPreviousSignIn = async () => {
    console.log('hasPreviousSignIn');
    const hasPreviousSignIn = GoogleSignin.hasPreviousSignIn();
    console.log('hasPreviousSignIn ->', hasPreviousSignIn);
    setState({ hasPreviousSignIn });
  };
  const createUser = async () => {
    console.log('createUser');
    try {
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo ->', userInfo);
      // do something with userInfo
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
  const getCurrentUser = async () => {
    console.log('GoogleLogin');
    const currentUser = GoogleSignin.getCurrentUser();
    console.log('currentUser ->', currentUser);
    setUser({ currentUser });
  };
  const GoogleLogin = async () => {
    console.log('GoogleLogin');
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userInfo ->', userInfo);
    return userInfo;
  };

  const handleGoogleLogin = async () => {
    console.log('login');
    try {
      const response = await GoogleLogin();
      const { idToken, user } = response;
      console.log('response', response);
      console.log('user', user);
      console.log('idToken', idToken);
    } catch (apiError) {
      console.log('error ', apiError);
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
      {/* <Button title="getCurrentUser" onPress={getCurrentUser} /> */}
      <Button title="GoogleLogin" onPress={GoogleLogin} />
      <Button title="hasPreviousSignIn" onPress={hasPreviousSignIn} />
      <Button title="createUser" onPress={createUser} />
      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          handleGoogleLogin();
        }}
        style={{ width: ms(200), height: ms(50) }}
        // disabled={false}
      /> */}
    </View>
  );
};

export default GoogleAuth;
// const signIn = async () => {
//   console.log('Pressed sign in');

//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = GoogleSignin.getTokens();
//     console.log('userInfo ->', userInfo);
//     setUserInfo(userInfo);
//     setError(null);
//   } catch (e) {
//     setError(e);
//   }
// };
