import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

type ButtonProps = {
  bgColor: string;
  btnLabel: string;
  textColor: string;
  textFont: number;
  onPress?: () => void;
};

const CustomButton = ({
  bgColor,
  btnLabel,
  textColor,
  onPress,
  textFont,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
      }}
    >
      <Text
        style={{ color: textColor, fontSize: textFont, fontWeight: 'bold' }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
