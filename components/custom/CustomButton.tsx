import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

type ButtonProps = {
  bgColor: string;
  btnLabel: string;
  textColor: string;
  boRadius: number;
  textFont: number;
  onPress?: () => void;
};

const CustomButton = ({
  bgColor,
  btnLabel,
  textColor,
  onPress,
  boRadius,
  textFont,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        borderRadius: boRadius,
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        borderWidth: 2,
      }}
    >
      <Text style={{ color: textColor, fontSize: textFont, fontWeight: '500' }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
