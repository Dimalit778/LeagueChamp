import { View, Text, Pressable, TextInput } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Colors from '@/myAssets/colors/Colors';
import { Button } from 'react-native-elements';
import { Feather, Fontisto } from '@expo/vector-icons';
import { useApp, useAuth, useEmailPasswordAuth } from '@realm/react';
import Toast from 'react-native-toast-message';
import { LoadingBall } from '../LoadingBall';

const Login = () => {
  const app = useApp();
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  // const { logInWithEmailPassword, result } = useAuth();
  const { logIn, result } = useEmailPasswordAuth();
  // const signIn = useCallback(
  //   async (email: string, password: string) => {
  //     const res = Realm.Credentials.emailPassword(email, password);

  //     await app.logIn(res);

  //     setLoading(false);
  //   },
  //   [app, userEmail]
  // );

  const checkFields = () => {
    if (!userEmail.current?.value || !userPassword.current?.value) {
      return Toast.show({
        type: 'error',
        text1: 'Please enter All Fields',
      });
    }
    let email = userEmail.current?.value.toLowerCase();
    let password = userPassword.current?.value;
    handleLogin(email, password);
  };
  const handleLogin = (email: string, password: string) => {
    logIn({ email, password });
  };

  // const handleLogin = useCallback(
  //   async (email: string, password: string) => {
  //     // logInWithEmailPassword({ email, password });
  //     logIn({ email, password });
  //   },
  //   [app, userEmail]
  // );

  return (
    <View style={styles.container}>
      {result.pending && <LoadingBall />}
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
      <View style={styles.inputBox}>
        {!showPassword ? (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Feather name="eye-off" size={ms(26)} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
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
      {result.error && (
        <Text style={styles.errorText}>Wrong Email or Password</Text>
      )}
      <Button
        title="Login"
        buttonStyle={{
          backgroundColor: Colors.darkGrey,
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: ms(22) }}
        onPress={() => checkFields()}
      />
    </View>
  );
};

export default Login;
const styles = ScaledSheet.create({
  container: {
    gap: 10,
    marginHorizontal: 30,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});