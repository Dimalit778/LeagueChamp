import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { useAuth, useUser } from '@realm/react';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../myAssets/colors/Colors';

const CreateUser = () => {
  const user = useUser();
  const { logOut } = useAuth();
  console.log('Create User ', user.customData);

  const image = {
    uri: 'https://w0.peakpx.com/wallpaper/355/120/HD-wallpaper-champions-league-icio-uefa-champions-league.jpg',
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreateUser;
const styles = StyleSheet.create({
  // textInput: {
  //   alignContent: 'flex-start',
  //   borderRadius: 100,
  //   color: 'blue',
  //   fontSize: 18,
  //   paddingHorizontal: 15,
  // },
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
