import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useUser } from '@realm/react';
import { useAppDispatch } from '@/redux/constans/hooks';
import { setUser } from '@/redux/reducers/userReducer';
import { Text, View } from 'react-native';

export default function App() {
  // const user = useUser().customData;
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   console.log('user');
  //   if (user) {
  //     dispatch(setUser(user));
  //   }
  // }, [user, dispatch]);

  // return <Redirect href="/(tabs)/Home" />;
  return (
    <View>
      <Text>sss</Text>
    </View>
  );
}
