import { View, Text, Button } from 'react-native';
import React, { useRef } from 'react';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useAppSelector } from '../../redux/constans/hooks';

const MyGames = () => {
  const userData = useAppSelector((state) => state.user);
  // console.log('myGames - userData ->', userData);
  return (
    <View>
      <Text>MyGames</Text>
    </View>
  );
};

export default MyGames;
