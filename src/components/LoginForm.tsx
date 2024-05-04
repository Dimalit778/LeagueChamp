import { View, TextInput, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Colors from '../myAssets/colors/Colors';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';
import { LoadingBall } from './LoadingBall';
import { useApp, Realm } from '@realm/react';
import Toast from 'react-native-toast-message';
import Checkbox from 'expo-checkbox';

const LoginForm = () => {
  const app = useApp();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const signIn = useCallback(async () => {
    let email = userEmail.toLowerCase();
    const creds = Realm.Credentials.emailPassword(email, password);

    await app.logIn(creds);
  }, [app, userEmail, password]);

  const handleLogin = useCallback(async () => {
    if (userEmail == '' || password == '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter All Fields',
      });

      return;
    }
    setLoading(true);
    try {
      await signIn();
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: `Failed Login: ${error?.message}`,
      });
    }
  }, [signIn, app, userEmail, password]);

  return (
    <View style={styles.container}>
      {loading && <LoadingBall />}
      <View style={styles.inputBox}>
        <Fontisto name="email" size={ms(26)} color="black" />
        <TextInput
          style={styles.textInput}
          value={userEmail}
          placeholder="Email"
          placeholderTextColor="grey"
          keyboardType={'email-address'}
          onChangeText={(text) => setUserEmail(text)}
        />
      </View>
      {/* PASSWORD Input */}
      <View style={styles.inputBox}>
        {!showPassword ? (
          <Feather name="lock" size={ms(26)} color="black" />
        ) : (
          <Feather name="unlock" size={ms(26)} color="black" />
        )}
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={showPassword}
          onValueChange={setShowPassword}
        />
        <Text style={{ fontSize: ms(14) }}>Show Password </Text>
      </View>
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
    </View>
  );
};

export default LoginForm;
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
    marginHorizontal: '5@ms',
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
