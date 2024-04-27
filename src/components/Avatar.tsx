import { useState } from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';

import { ScaledSheet, ms, s, vs } from 'react-native-size-matters';

import Colors from '../myAssets/colors/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const avatarImage = require('../myAssets/images/avatar.jpg');

type avatarProps = {
  openModal: () => void;
  uri: string;
};

const Avatar = ({ uri, openModal }: avatarProps) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => openModal()}>
        <Image source={uri ? { uri } : avatarImage} style={[styles.image]} />
      </TouchableWithoutFeedback>
      {/* Open modal Btn */}
      <TouchableOpacity onPress={() => openModal()} style={styles.editButton}>
        <MaterialCommunityIcons
          name="camera-plus-outline"
          size={ms(28)}
          color="wheat"
        />
      </TouchableOpacity>
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
    height: '140@vs',
    width: '140@s',
    borderColor: Colors.blueGrey,
    borderWidth: '3@ms',
    borderRadius: '60@ms',
  },
  editButton: {
    borderRadius: '24@ms',
    padding: '8@ms',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    left: '40@ms',
    bottom: '3@ms',
  },
});
