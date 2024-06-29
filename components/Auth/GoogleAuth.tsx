import { Text, View } from 'react-native';
import React from 'react';

import { ms, vs } from 'react-native-size-matters';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import { useCustomUser } from '@/realmFunctions/useCustomUser';
import { useGoogleAuth } from '@/realmFunctions/useGoogleAuth';

const GoogleAuth = () => {
  const { saveCustomUser } = useCustomUser();
  const { logInWithGoogle, getGoogleUser, googleConfig } = useGoogleAuth();
  googleConfig();
  const handleLogin = async () => {
    const { code, user, error } = await getGoogleUser();
    if (error) return console.log('error ', error);
    try {
      await logInWithGoogle(code);
      await saveCustomUser(user);
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('error ', error);
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
        color={GoogleSigninButton.Color.Light}
        onPress={() => handleLogin()}
        style={{ width: ms(200), height: ms(50) }}
      />
    </View>
  );
};

export default GoogleAuth;
