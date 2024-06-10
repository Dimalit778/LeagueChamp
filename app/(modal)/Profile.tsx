import { View, Text, TextInput } from 'react-native';

import React, { useState } from 'react';
import { useQuery, useRealm, useUser } from '@realm/react';
import { Button } from 'react-native-elements';

import { ScaledSheet, s, vs, ms } from 'react-native-size-matters';

import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';

import CustomKeyboardView from '../../components/custom/CustomKeyboardView';

import Avatar from '../../components/Avatar';
import ModalPicker from '../../components/ModalPicker';
import Colors from '../../myAssets/colors/Colors';
import { useRouter } from 'expo-router';

import { User } from '../../models/User';

const Profile = () => {
  console.log('Profile');
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const realm = useRealm();
  const user = useUser();
  const userInfo = useQuery(User);

  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');

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
      setUserImage(result.assets[0].uri);
    }
  };
  const clearImage = () => {
    setModalVisible(false);
    setUserImage(null);
  };

  const saveUser = () => {
    const toUpdate = realm.objects(User).filtered('userId == $0', user.id);

    realm.write(() => {
      toUpdate[0].name = userName;
      toUpdate[0].image = userImage;
    });
    router.replace('(drawer)/leagues');
  };

  return (
    <CustomKeyboardView>
      <Text style={styles.header2}>Create new User</Text>
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
              value={userName}
              placeholder="Name"
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
        titleStyle={{ fontWeight: 'bold', fontSize: ms(22) }}
        onPress={() => saveUser()}
      />
    </CustomKeyboardView>
  );
};

export default Profile;
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
    textAlign: 'center',
    color: Colors.gray,
    marginTop: '50@ms',
    fontSize: '28@ms',
    fontWeight: 'bold',
    // paddingTop: '10@ms',
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
