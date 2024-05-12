import { I18nManager, Text, View } from 'react-native';
import { Redirect, useRouter } from 'expo-router';
import { useApp, useObject, useUser } from '@realm/react';
import { User } from '../models/User';
import { useEffect } from 'react';
I18nManager.allowRTL(false);

export default function App() {
  const router = useRouter();
  const userD = 'dima';
  const user = useUser();
  return <Redirect href="/(newUser)/createUser" />;
}
// const getUser = async () => {
// Access linked MongoDB collection
// const mongodb = user.mongoClient('mongodb-atlas');
// const users = mongodb.db('LeagueChamp').collection<User>('User');
// Query the collection
// const response = await users.findOne({ userId: user.id });
//     if (userD) {
//       router.replace('(drawer)');
//     } else {
//       router.replace('(newUser)/createUser');
//     }
//   };
//   // ...
//   useEffect(() => {
//     getUser();
//   }, [user]);
