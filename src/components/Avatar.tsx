import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScaledSheet, ms, s, vs } from 'react-native-size-matters';
import avatarImage from '../myAssets/images/avatar.jpg';
import Colors from '../myAssets/colors/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type avatarProps = {
  uri: string;
  onButtonPress(): void;
};
const Avatar = ({ uri, onButtonPress }: avatarProps) => {
  const [image, setImage] = useState(null);
  const onPress = () => {};
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
  const clearImage = () => {
    setImage(null);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={uri ? { uri } : avatarImage} style={[styles.image]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onButtonPress} style={styles.editButton}>
        <MaterialCommunityIcons
          name="camera-plus-outline"
          size={ms(32)}
          color="black"
        />
      </TouchableOpacity>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: s(130), height: vs(130) }}
        />
      )}
    </View>
  );
};
export default Avatar;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderColor: Colors.blueGrey,
    borderWidth: 5,
    borderRadius: 75,
    // marginTop: 20,
  },
  editButton: {
    borderRadius: '24@ms',
    padding: '8@ms',
    position: 'absolute',
    left: '25@ms',
    bottom: '5@ms',
  },
});
