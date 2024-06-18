import { View, TextInput, Pressable } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';

import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';

import { useApp, Realm } from '@realm/react';
import Toast from 'react-native-toast-message';
import { writeCustomUserData } from '../api/customUser';

import Colors from '../myAssets/colors/Colors';
import { LoadingBall } from './LoadingBall';

type props = {
  login: boolean;
};

const AuthForm = ({ login }: props) => {
  const app = useApp();

  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signIn = useCallback(async () => {
    let email = userEmail.current?.value.toLowerCase();
    let password = userPassword.current?.value;

    const res = Realm.Credentials.emailPassword(email, password);

    await app.logIn(res);
    setLoading(false);
  }, [app, userEmail]);

  const handleLogin = useCallback(async () => {
    let email = userEmail.current?.value;
    let password = userPassword.current?.value;
    setLoading(true);
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Please enter All Fields',
      });
      setLoading(false);
      return;
    }
    try {
      await signIn();
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: `Failed Login: ${error?.message}`,
      });
    }
  }, [signIn, app, userEmail]);

  const handleRegister = useCallback(async () => {
    let email = userEmail.current?.value.toLowerCase();
    let name = userName?.current?.value;
    let password = userPassword.current?.value;
    setLoading(true);
    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      await signIn();
      await writeCustomUserData(app.currentUser, name);
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: `Failed Sign Up : ${error?.message}`,
      });
    }
  }, [app, userEmail]);
  return (
    <View style={styles.container}>
      {loading && <LoadingBall />}
      {!login && (
        <View style={styles.inputBox}>
          <Fontisto name="email" size={ms(26)} color="black" />
          <TextInput
            style={styles.textInput}
            ref={userName}
            placeholder="Name"
            placeholderTextColor="grey"
            keyboardType={'email-address'}
            onChangeText={(text) => (userName.current.value = text)}
          />
        </View>
      )}
      <View style={styles.inputBox}>
        <Fontisto name="email" size={ms(26)} color="black" />
        <TextInput
          style={styles.textInput}
          ref={userEmail}
          placeholder="Email"
          placeholderTextColor="grey"
          keyboardType={'email-address'}
          onChangeText={(text) => (userEmail.current.value = text)}
        />
      </View>
      {/* PASSWORD Input */}
      <View style={styles.inputBox}>
        {!showPassword ? (
          <Pressable onPress={() => handleShowPassword()}>
            <Feather name="eye-off" size={ms(26)} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={() => handleShowPassword()}>
            <Feather name="eye" size={ms(26)} color="black" />
          </Pressable>
        )}
        <TextInput
          style={styles.textInput}
          ref={userPassword}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={!showPassword}
          onChangeText={(text) => (userPassword.current.value = text)}
        />
      </View>

      {login ? (
        <Button
          title="Log In"
          buttonStyle={{
            backgroundColor: Colors.darkGrey,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: ms(22) }}
          onPress={() => handleLogin()}
        />
      ) : (
        <Button
          title="Sign Up"
          buttonStyle={{
            backgroundColor: Colors.darkGrey,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: ms(22) }}
          onPress={() => handleRegister()}
        />
      )}
    </View>
  );
};

export default AuthForm;
const styles = ScaledSheet.create({
  container: {
    gap: 10,
    padding: '30@ms',
    borderWidth: 1,
    borderRadius: 15,
  },

  inputBox: {
    flexDirection: 'row',
    backgroundColor: Colors.gray,
    borderRadius: 10,
    padding: '10@ms',
  },
  textInput: {
    fontSize: '16@ms',
    marginHorizontal: '8@ms',
    width: '85%',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    margin: '5@ms',
  },
});
