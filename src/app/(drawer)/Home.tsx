import { View, Text } from 'react-native';
import React from 'react';
// import TaskList from '../../components/TaskList';
import { useAuth, useUser } from '@realm/react';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const Home = () => {
  const user = useUser();
  const { _id, name, userId } = user.customData;
  const { logOut } = useAuth();
  console.log('hOME ', user.customData);
  const performLogout = () => {
    logOut();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24 }}>Homeeeeeeeeee</Text>
        <Text style={{ fontSize: 24 }}>{name}</Text>
        <Text style={{ fontSize: 24 }}>{userId}</Text>
        <Link href={'/home/nextPage'}>Next page</Link>
        {/* <TaskList /> */}
        <Button title="LOG out" onPress={() => logOut()} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
