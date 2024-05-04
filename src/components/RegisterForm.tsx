import { View, TextInput, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Colors from '../myAssets/colors/Colors';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native-elements';
import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
import { useApp, Realm, useRealm, useUser } from '@realm/react';
import { LoadingBall } from './LoadingBall';

const RegisterForm = () => {
  const app = useApp();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const checkValidInputs = () => {
    if (userName == '' || userEmail == '' || password == '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter All Fields',
      });

      return;
    }

    setLoading(true);

    handleRegister();
  };
  const handleRegister = useCallback(async () => {
    let email = userEmail.toLowerCase();
    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      await signIn();
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: `Failed Sign Up : ${error?.message}`,
      });
    }
  }, [app, userEmail, password]);

  const signIn = useCallback(async () => {
    let email = userEmail.toLowerCase();
    const credentials = Realm.Credentials.emailPassword(email, password);
    //Update User in MongoDB with his name
    await app.logIn(credentials);
    // const usersCollection = userRes
    //   .mongoClient('mongodb-atlas')
    //   .db('League')
    //   .collection('Users');
    // await usersCollection.updateOne(
    //   { userId: userRes.id },
    //   { $set: { name: userName } },
    //   { upsert: true }
    // );
    // await userRes.refreshCustomData();
  }, [app, userEmail, password]);

  return (
    <View style={styles.container}>
      {loading && <LoadingBall />}
      <View style={styles.inputBox}>
        <Feather name="user" size={ms(26)} color="black" />
        <TextInput
          style={styles.textInput}
          value={userName}
          placeholder="Name"
          placeholderTextColor="grey"
          onChangeText={(text) => setUserName(text)}
        />
      </View>
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
        title="Sign Up"
        buttonStyle={{
          backgroundColor: Colors.darkGrey,
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: ms(22) }}
        onPress={() => checkValidInputs()}
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
    padding: '8@ms',
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
