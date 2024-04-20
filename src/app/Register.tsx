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

import KeyBoardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

const Register = () => {
  // hooks
  const { register, result, logIn } = useEmailPasswordAuth();
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
    <KeyBoardAvoidingContainer>
      <Animated.View style={{ alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: Colors.gray,
            // height: 700,
            // width: 460,
            // borderTopLeftRadius: 130,
            // paddingTop: 50,
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
            Welcome
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
        </View>
      </Animated.View>
    </KeyBoardAvoidingContainer>
  );
};

export default Register;
const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    backgroundColor: 'rgb(220,220, 220)',
    // width: '90%',
    // marginLeft: 50,
    // marginVertical: 10,
    // borderRadius: 15,
    // padding: 15,
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
