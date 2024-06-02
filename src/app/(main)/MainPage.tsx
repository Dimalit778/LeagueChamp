import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { useQuery, useUser } from '@realm/react';
import { League, User } from '../../models';

const MainPage = () => {
  const user = useUser();
  const router = useRouter();

  const userApp = useQuery(User).filtered(`userId == '${user.id}'`);
  const userLeague = useQuery(League).filtered(`owner_id == '${user.id}'`);

  useEffect(() => {
    if (userLeague.length > 0) {
      router.replace('tabs');
    } else {
      router.replace('leagues');
    }
  }, []);
  return (
    <View>
      <Text>FFFFFFFFSSS</Text>
    </View>
  );
};

export default MainPage;
