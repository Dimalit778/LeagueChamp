import { View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../myAssets/colors/Colors';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Button } from 'react-native-elements';
import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
import { AuthOperationName, useEmailPasswordAuth } from '@realm/react';

const RegisterForm = () => {
  const { register, result, logIn } = useEmailPasswordAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (result.success && result.operation === AuthOperationName.Register) {
      logIn({ email, password });
    } else {
      Toast.show({
        type: 'error',
        text1: 'User exists',
      });
    }
  }, [result, logIn]);

  const handleRegister = async () => {
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
    register({ email, password });
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.inputBox}>
        <Feather name="unlock" size={ms(26)} color="black" />
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
        titleStyle={{ fontWeight: 'bold', fontSize: ms(22) }}
        onPress={() => handleRegister()}
      />
    </View>
  );
};

export default RegisterForm;
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
    paddingLeft: '10@ms',
    width: '100%',
  },
});
