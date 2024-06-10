import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
type modalProps = {
  modalVisible: boolean;
  onBackPress: () => void;
  removeImage: () => void;
  addImage: () => void;
};

const ModalPicker = ({
  modalVisible,
  onBackPress,
  removeImage,
  addImage,
}: modalProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.icons}>
            {/* ___ Add Image ___ */}
            <TouchableOpacity onPress={() => addImage()}>
              <Ionicons name="image-outline" size={ms(40)} color="green" />
              <Text style={styles.modalText}>Gallery</Text>
            </TouchableOpacity>
            {/* ___ Remove Image ___ */}
            <TouchableOpacity onPress={() => removeImage()}>
              <AntDesign name="delete" size={ms(40)} color="red" />
              <Text style={styles.modalText}>Remove</Text>
            </TouchableOpacity>
          </View>
          {/* Close Button */}
          <TouchableOpacity
            onPress={() => onBackPress()}
            style={styles.buttonClose}
          >
            <Fontisto name="close" size={ms(36)} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPicker;
const styles = ScaledSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '200@s',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: '20@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonClose: {
    alignItems: 'center',
    bottom: '-15@ms',
  },

  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
