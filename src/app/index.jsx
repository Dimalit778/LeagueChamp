import { Redirect } from 'expo-router';
import LoadingBall from '../components/LoadingBall';
import { useUser } from '@realm/react';

export default function App() {
  const user = useUser();
  const { name } = user.customData;
  if (!name) return <Redirect href="CreateUser" />;
  return <Redirect href="Home" />;
}
