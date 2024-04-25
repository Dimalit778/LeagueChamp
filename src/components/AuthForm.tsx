import { View, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// import Toast from 'react-native-toast-message';

import { Button } from 'react-native-elements';
import {
  AuthOperationName,
  useApp,
  useAuth,
  useEmailPasswordAuth,
} from '@realm/react';
import Toast from 'react-native-toast-message';
import Colors from '../myAssets/colors/Colors';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';

type AuthCardProps = {
  authCard: SharedValue<number>;
};

export enum LOG_REG {
  login = 0,
  register = 1,
}
const AuthForm = ({ authCard }: AuthCardProps) => {
  // hooks
  const { register, result, logIn } = useEmailPasswordAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //  Login Animation
  const loginAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      authCard.value,
      [LOG_REG.login, LOG_REG.register],
      [0, 180]
    );
    return {
      transform: [
        { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
      ],
    };
  });
  //  Register Animation
  const registerAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      authCard.value,
      [LOG_REG.login, LOG_REG.register],
      [180, 360]
    );
    return {
      transform: [
        { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
      ],
    };
  });

  useEffect(() => {
    if (result.success && result.operation === AuthOperationName.Register) {
      logIn({ email, password });
    }
  }, [result, logIn]);

  const handleRegister = async () => {
    console.log('register');
    if (email == '' || password == '' || confirmPassword == '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter All Fields',
      });

      return;
    }
    if (confirmPassword !== password) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match',
      });
      return;
    }
    // register({ email, password });
  };
  const handleLogin = async () => {
    console.log('login');
    console.log(email);
    console.log(password);
  };

  return (
    <>
      {/* --- > Register Card < --- */}
      <Animated.View
        style={[styles.card, styles.registerCard, registerAnimatedStyles]}
      >
        <View>
          {/* EMAIL  Input */}
          <View style={styles.inputBox}>
            <Fontisto name="email" size={ms(26)} color="black" />
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder="Email"
              placeholderTextColor="grey"
              keyboardType={'email-address'}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {/* PASSWORD Input */}
          <View style={styles.inputBox}>
            <Feather name="lock" size={ms(26)} color="black" />
            <TextInput
              style={styles.textInput}
              value={password}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          {/* CONFIRM PASSWORD Input */}
          <View style={styles.inputBox}>
            <Feather name="lock" size={ms(26)} color="black" />
            <TextInput
              style={styles.textInput}
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
          <Button
            title="Sign Up"
            buttonStyle={{
              backgroundColor: Colors.darkGrey,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: ms(20) }}
            onPress={() => handleRegister()}
          />
        </View>
      </Animated.View>
      {/* --- > Login Card < --- */}

      <Animated.View
        style={[styles.card, styles.loginCard, loginAnimatedStyles]}
      >
        <View>
          {/* EMAIL  Input */}
          <View style={styles.inputBox}>
            <Fontisto name="email" size={ms(26)} color="black" />
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder="Email"
              placeholderTextColor="grey"
              keyboardType={'email-address'}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {/* PASSWORD Input */}
          <View style={styles.inputBox}>
            <Feather name="lock" size={ms(26)} color="black" />
            <TextInput
              style={styles.textInput}
              value={password}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Button
            title="Log In"
            buttonStyle={{
              backgroundColor: Colors.darkGrey,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: ms(20) }}
            onPress={() => handleLogin()}
          />
        </View>
      </Animated.View>
    </>
  );
};

export default AuthForm;
const styles = ScaledSheet.create({
  registerCard: {
    backfaceVisibility: 'hidden',
    // position: 'absolute',
  },
  loginCard: {
    backfaceVisibility: 'hidden',
  },

  card: {
    width: '250@s',
    gap: '13@ms',
    borderColor: 'black ',
    borderWidth: 2,
    borderRadius: 15,
    padding: '18@ms',
    justifyContent: 'space-between',
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: Colors.gray,
    borderRadius: 10,
    padding: '9@ms',
  },
  textInput: {
    fontSize: '18@ms',
    paddingLeft: '18@ms',
  },
});
