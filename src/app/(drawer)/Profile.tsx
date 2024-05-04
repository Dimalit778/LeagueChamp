import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import React, { useEffect, useState } from 'react';
import { useApp, useAuth, useQuery, useRealm, useUser } from '@realm/react';
import { Button } from 'react-native-elements';

import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';

import Toast from 'react-native-toast-message';
import { LoadingBall } from '../../components/LoadingBall';
import Avatar from '../../components/Avatar';
import ModalPicker from '../../components/ModalPicker';

import CustomKeyboardView from '../../components/custom/CustomKeyboardView';
import Colors from '../../myAssets/colors/Colors';

const Profile = () => {
  const user = useUser();
  const app = useApp();
  const router = useRouter();
  const { name, image } = user.customData;

  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState(image);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // ---> Image Picker
  const pickImage = async () => {
    setModalVisible(false);
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setUserImage(result.assets[0].uri);
    }
  };
  // ---> Remove Image
  const clearImage = () => {
    setModalVisible(false);
    setUserImage(null);
  };
  // Function Update User Data
  const saveCustomUser = async () => {
    if (userImage == image && userName == '') {
      return;
    }
    setLoading(true);
    const customUserDataCollection = user
      .mongoClient('mongodb-atlas')
      .db('League')
      .collection('Users');

    const filter = {
      userId: user.id,
    };
    const updateDoc = {
      $set: {
        name: userName || name,
        image: userImage,
      },
    };
    const options = { upsert: true };
    await customUserDataCollection.updateOne(filter, updateDoc, options);
    // Refresh custom user data once it's been updated on the server
    const customUserData = await user.refreshCustomData();
    // if (!customUserData) console.log('No custom user data ' + customUserData);
    Toast.show({
      type: 'success',
      text1: 'Changes Saved !',
    });
    setLoading(false);
  };
  // ---> Delete User && Go To Welcome Page
  const backToWelcome = async () => {
    setLoading(true);
    try {
      const res = await app.deleteUser(user);
      router.replace('Welcome');
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CustomKeyboardView>
      {loading && <LoadingBall />}

      {/*Profile  Image */}
      <View style={styles.box_image}>
        <Avatar uri={userImage} openModal={() => setModalVisible(true)} />

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
      <View style={styles.box}>
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
              value={userName}
              placeholder={name}
              placeholderTextColor="grey"
              keyboardType={'email-address'}
              onChangeText={(text) => setUserName(text)}
            />
          </View>
        </View>
      </View>
      <Button
        title="Save Changes"
        buttonStyle={{
          backgroundColor: Colors.darkGreen,
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={styles.saveButton}
        titleStyle={{ fontWeight: 'bold', fontSize: ms(16) }}
        onPress={() => saveCustomUser()}
      />
    </CustomKeyboardView>
  );
};

export default Profile;
const styles = ScaledSheet.create({
  box_image: {
    height: '250@vs',
    alignItems: 'center',
    position: 'relative',
  },
  box: {
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
  },
  textInput: {
    fontSize: '16@ms',
    paddingLeft: '10@ms',
    width: '90%',
  },

  saveButton: {
    marginTop: '20@vs',
    padding: '20@ms',
    marginHorizontal: 50,
  },
});
