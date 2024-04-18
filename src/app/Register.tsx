import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from 'react-native-elements';
import {
  AuthOperationName,
  useApp,
  useAuth,
  useEmailPasswordAuth,
} from '@realm/react';
import Toast from 'react-native-toast-message';
import Colors from '../myAssets/colors/Colors';

//API
const image = {
  uri: 'https://w0.peakpx.com/wallpaper/355/120/HD-wallpaper-champions-league-icio-uefa-champions-league.jpg',
};
const Register = () => {
  // hooks

  const { register, result, logIn } = useEmailPasswordAuth();
  // const { logInWithFunction, result } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('aa@gmail.com');
  const [password, setPassword] = useState('123456');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    console.log('------ start useEffect');
    if (result.success && result.operation === AuthOperationName.Register) {
      logIn({ email, password });
    }
    console.log('error ' + result.error);
  }, [result, logIn]);

  const handleRegister = async () => {
    // if (name == '' || email == '' || password == '' || confirmPassword == '') {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Please enter All Fields',
    //   });
    //   console.log('error fileds');r
    //   return;
    // }
    // if (confirmPassword !== password) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Passwords do not match',
    //   });
    //   return;
    // }
    register({ email, password });
  };

  // if (name == '' || email == '' || password == '' || confirmPassword == '') {
  //   Toast.show({
  //     type: 'error',
  //     text1: 'Please enter All Fields',
  //   });
  //   return;
  // }
  // if (confirmPassword !== password) {
  //   Toast.show({
  //     type: 'error',
  //     text1: 'Passwords do not match',
  //   });
  //   return;
  // }
  // const user = {
  //   name: name,
  //   email: email,
  //   password: password,
  // };
  // dispatch(register(user)).then((action) => {
  //   if (action.error) {
  //     Toast.show({
  //       type: 'error',
  //       text1: action.payload,
  //     });
  //   } else {
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Login Successfully',
  //     });
  //     router.replace('Login');
  //   }
  // });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ alignItems: 'center', width: 460 }}>
          <Text
            style={{
              color: Colors.gray,
              fontSize: 64,
              fontWeight: 'bold',
              marginTop: 100,
              paddingBottom: 20,
            }}
          >
            Register
          </Text>
          <View
            style={{
              backgroundColor: Colors.gray,
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 50,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: Colors.dark,
                fontWeight: 'bold',
              }}
            >
              Welcome Back
            </Text>
            <Text
              style={{
                color: Colors.darkGreen,
                fontSize: 19,
                fontWeight: 'bold',
                marginBottom: 20,
              }}
            >
              Create a new account
            </Text>

            {/* EMAIL  Input */}
            <View style={styles.inputBox}>
              <Fontisto name="email" size={28} color="black" />
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
              <Feather name="lock" size={28} color="black" />
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
              <Feather name="lock" size={28} color="black" />
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
                marginTop: 30,
              }}
              containerStyle={{
                width: 250,
                height: 100,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              onPress={() => handleRegister()}
            />

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Already have an account ?
              </Text>
              <TouchableOpacity onPress={() => router.replace('/Login')}>
                <Text
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;
const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    backgroundColor: 'rgb(220,220, 220)',
    width: '90%',
    marginLeft: 50,
    marginVertical: 10,
    borderRadius: 15,
    padding: 15,
    borderColor: Colors.dark,
    borderWidth: 1,
  },
  textInput: {
    alignContent: 'flex-start',
    borderRadius: 100,
    color: 'blue',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
