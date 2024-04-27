import { View, Text, Pressable, TextInput, Alert, Modal } from 'react-native';

import React, { useState } from 'react';
import { useAuth, useUser } from '@realm/react';
import { Button } from 'react-native-elements';
import Colors from '../myAssets/colors/Colors';
import CustomBackgroundImage from '../components/CustomBackgroundImage';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';
import HomeAnimation from '../components/HomeAnimation';
import * as ImagePicker from 'expo-image-picker';

import Avatar from '../components/Avatar';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);
  const user = useUser();
  const { logOut } = useAuth();
  console.log('Create User ', user.customData);
  const performLogout = () => {
    logOut();
  };
  // const onButtonPress = () => {
  //   console.log('onButtonPress');
  // };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <CustomBackgroundImage>
      <CustomKeyboardView>
        <View
          style={{ height: vs(200), paddingTop: ms(40), alignItems: 'center' }}
        >
          <Text style={styles.header1}>Welcome</Text>
          <Text style={styles.header2}>Create new User</Text>
        </View>
        {/*Profile  Image */}
        <View style={styles.box_image}>
          <Avatar onButtonPress={() => setModalVisible(true)} uri={image} />
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>

        {/* Fields */}

        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder="Name"
            placeholderTextColor="grey"
            keyboardType={'email-address'}
            onChangeText={(text) => setName(text)}
          />
        </View>
        {/* <Button title="LOG out" onPress={() => logOut()} /> */}
        <HomeAnimation />
      </CustomKeyboardView>
    </CustomBackgroundImage>
  );
};

export default CreateUser;
const styles = ScaledSheet.create({
  inputBox: {
    // flexDirection: 'row',
    marginHorizontal: '80@ms',
    backgroundColor: Colors.gray,
    borderRadius: 10,
    padding: '10@ms',
  },
  textInput: {
    fontSize: '16@ms',
    paddingLeft: '10@ms',
    width: '100%',
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
  box_image: {
    alignItems: 'center',
    position: 'relative',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
