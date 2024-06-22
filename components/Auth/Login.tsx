import { View, Text, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Colors from '@/myAssets/colors/Colors';
import { Button } from 'react-native-elements';
import { Feather, Fontisto } from '@expo/vector-icons';
import { useApp } from '@realm/react';
import { LoadingBall } from '../LoadingBall';
import { checkFormFields } from './checkFormFields';
import { Realm } from '@realm/react';

const Login = () => {
  const app = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const handleLogin = async () => {
    const valid = checkFormFields(email, password);
    if (typeof valid === 'string') {
      setErrMsg(valid);
      return;
    }
    setLoading(true);
    try {
      await app.logIn(Realm.Credentials.emailPassword(email, password));
    } catch (error) {
      setErrMsg('Wrong Email or Password');
    }
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      {loading && <LoadingBall />}
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
          value={password}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {errMsg && <Text style={styles.errorText}>{errMsg}</Text>}
      <Button
        title="Login"
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
    backgroundColor: 'red',
    marginHorizontal: '35@ms',
    color: 'white',
    fontSize: '14@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '5@ms',
  },
});
