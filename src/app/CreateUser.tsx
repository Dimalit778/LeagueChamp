import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useAuth, useUser } from '@realm/react';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../myAssets/colors/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const CreateUser = () => {
  const [name, setName] = useState('');
  const user = useUser();
  const { logOut } = useAuth();
  console.log('Create User ', user.customData);
  const performLogout = () => {
    logOut();
  };

  const image = {
    uri: 'https://w0.peakpx.com/wallpaper/355/120/HD-wallpaper-champions-league-icio-uefa-champions-league.jpg',
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.header1}>Welcome</Text>
          <Text style={styles.header2}>Create new User</Text>
        </View>
        <View>
          <View style={{ alignItems: 'center', marginTop: 25 }}>
            <Text style={{ fontSize: 20 }}>Profile Image</Text>
            <View style={styles.uploadImage}></View>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>Tot</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              value={name}
              placeholder="Email"
              placeholderTextColor="grey"
              keyboardType={'email-address'}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <Button title="LOG out" onPress={() => logOut()} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default CreateUser;
const styles = StyleSheet.create({
  textInput: {
    alignContent: 'flex-start',
    borderRadius: 100,
    color: 'blue',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  inputBox: {
    // flexDirection: 'row',
    backgroundColor: 'rgb(220,220, 220)',
    // width: '90%',
    // marginLeft: 50,
    // marginVertical: 10,
    // borderRadius: 15,
    // padding: 15,
    borderColor: Colors.dark,
    borderWidth: 1,
  },
  header1: {
    color: Colors.darkGreen,
    fontSize: 64,
    fontWeight: 'bold',
    paddingTop: 40,
  },
  header2: {
    color: Colors.gray,
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 25,
  },
  uploadImage: {
    height: 150,
    width: 150,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
    marginTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // alignItems: 'center',
  },
});
