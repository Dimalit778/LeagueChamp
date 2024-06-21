import { View, Text, Pressable, TextInput } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Colors from '@/myAssets/colors/Colors';
import { Button } from 'react-native-elements';
import { Fontisto, Feather, AntDesign } from '@expo/vector-icons';
import { writeCustomUserData } from '@/api/customUser';
import { useApp } from '@realm/react';

const Register = () => {
  const app = useApp();
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  //   console.log('login =--- > ', result);
  const signIn = useCallback(
    async (email: string, password: string) => {
      const res = Realm.Credentials.emailPassword(email, password);

      await app.logIn(res);
    },
    [app, userEmail]
  );
  const handleRegister = useCallback(async () => {
    let email = userEmail.current?.value.toLowerCase();
    let name = userName.current?.value;
    let password = userPassword.current?.value;

    await app.emailPasswordAuth.registerUser({ email, password });
    await signIn(email, password);
    await writeCustomUserData(app.currentUser, name, email);
  }, [app, userEmail]);

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <AntDesign name="user" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          ref={userName}
          placeholder="Name"
          placeholderTextColor="grey"
          keyboardType={'email-address'}
          onChangeText={(text) => (userName.current.value = text)}
        />
      </View>
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
      {/* {result.error && <AuthError />} */}
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

export default Register;
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
  },
});
