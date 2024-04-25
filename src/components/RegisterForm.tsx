import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../myAssets/colors/Colors';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Button } from 'react-native-elements';
import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = async () => {
    console.log('register');
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
          value={password}
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
  },
});
