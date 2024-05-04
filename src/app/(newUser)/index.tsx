import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import React, { useEffect, useState } from 'react';
import { useApp, useAuth, useUser } from '@realm/react';
import { Button } from 'react-native-elements';

import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';

import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomKeyboardView from '../../components/custom/CustomKeyboardView';
import CustomBackgroundImage from '../../components/custom/CustomBackgroundImage';
import Avatar from '../../components/Avatar';
import ModalPicker from '../../components/ModalPicker';
import Colors from '../../myAssets/colors/Colors';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const user = useUser();
  const app = useApp();
  useEffect(() => {
    console.log('use effect');
    console.log('Create User ', user.customData);
  }, [user, name]);

  // const onButtonPress = () => {
  //   console.log('onButtonPress');
  // };
  const pickImage = async () => {
    setModalVisible(false);
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
  const clearImage = () => {
    setModalVisible(false);
    setImage(null);
  };
  const saveUser = () => {
    console.log('save');
  };
  const backToWelcome = async () => {
    await app.deleteUser(user);
  };

  return (
    <CustomBackgroundImage>
      <CustomKeyboardView>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Text style={styles.header1}>Welcome</Text>
          <Text style={styles.header2}>Create new User</Text>
        </View>

        {/*Profile  Image */}
        <View style={styles.box_image}>
          <Avatar uri={image} openModal={() => setModalVisible(true)} />

          {/* Modal upload image */}
          <ModalPicker
            modalVisible={modalVisible}
            onBackPress={() => {
              setModalVisible(false);
            }}
            removeImage={() => clearImage()}
            addImage={() => pickImage()}
          />
        </View>

        {/* Fields */}
        <View style={styles.box_fields}>
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.gray,
                fontSize: ms(16),
              }}
            >
              Name
            </Text>
            <View style={styles.inputBox}>
              <FontAwesome5 name="user" size={ms(24)} color="black" />
              <TextInput
                style={styles.textInput}
                value={name}
                placeholder="Name"
                placeholderTextColor="grey"
                keyboardType={'email-address'}
                onChangeText={(text) => setName(text)}
              />
            </View>
          </View>
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.gray,
                fontSize: ms(16),
              }}
            >
              Nickname
            </Text>
            <View style={styles.inputBox}>
              <FontAwesome name="user-circle-o" size={ms(24)} color="black" />
              <TextInput
                style={styles.textInput}
                value={nickName}
                placeholder="Nickname"
                placeholderTextColor="grey"
                keyboardType={'email-address'}
                onChangeText={(text) => setNickName(text)}
              />
            </View>
          </View>
        </View>
        <Button
          title="Start"
          buttonStyle={{
            backgroundColor: Colors.darkGreen,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
          }}
          containerStyle={styles.saveButton}
          titleStyle={{ fontWeight: 'bold', fontSize: ms(22) }}
          onPress={() => saveUser()}
        />
        <TouchableOpacity
          onPress={() => backToWelcome()}
          style={styles.backHome}
        >
          <MaterialCommunityIcons
            name="backspace-outline"
            size={ms(30)}
            color="black"
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </CustomKeyboardView>
    </CustomBackgroundImage>
  );
};

export default CreateUser;
const styles = ScaledSheet.create({
  box_fields: {
    marginHorizontal: '50@ms',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '15@ms',
    borderColor: Colors.gray,
    borderWidth: '2@ms',
    borderRadius: '10@ms',
    gap: '10@ms',
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: Colors.gray,
    borderRadius: '10@ms',
    padding: '10@ms',
    // marginTop: '20@ms',
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
    paddingTop: '15@ms',
  },
  header2: {
    color: Colors.gray,
    fontSize: '28@ms',
    fontWeight: 'bold',
    paddingTop: '10@ms',
  },
  box_image: {
    height: '200@vs',
    alignItems: 'center',
    position: 'relative',
  },
  saveButton: {
    padding: '20@ms',
  },
  backHome: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: '8@ms',
    width: '90@s',
    padding: '3@ms',
    gap: '10@ms',
    marginLeft: '8@ms',
  },
  backText: {
    fontSize: '20@ms',
    color: 'black',
  },
});
