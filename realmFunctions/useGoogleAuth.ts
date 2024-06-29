import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useApp } from '@realm/react';
import Realm from 'realm';

export const useGoogleAuth = () => {
  const app = useApp();
  const googleConfig = () => {
    GoogleSignin.configure({
      webClientId:
        '827466256996-26crehcu7hdmp6kclit69db9daokff9c.apps.googleusercontent.com',
      offlineAccess: true,
      // profileImageSize: 120,
    });
  };

  const getGoogleUser = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      return { code: userInfo.serverAuthCode, user: userInfo.user };
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
        return error;
      }
    }
  };
  const logInWithGoogle = async (code: any) => {
    const credentials = Realm.Credentials.google({ authCode: code });
    try {
      const user = await app.logIn(credentials);
      return user;
    } catch (error) {
      console.error('Failed to log in', error);
    }
  };

  return { logInWithGoogle, googleConfig, getGoogleUser };
};
