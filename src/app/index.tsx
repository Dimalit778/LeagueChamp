import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import SpinnerAnimation from '@/components/SpinnerAnimation';

import { Stack, useRouter } from 'expo-router';
import TaskBoard from '../components/TaskBoard';
import 'react-native-get-random-values';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <ImageBackground source={homeImg} style={styles.image}> */}
      <View style={{ flex: 1 }}>
        {/* BOX Header */}
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>League Champion</Text>
        </View>

        {/* BOX Section */}
        <View style={styles.boxSection}>{/* <SpinnerAnimation /> */}</View>
      </View>
      {/* </ImageBackground> */}
      <TaskBoard />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '25%',
  },
  textHeader: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'grey',
  },
  boxSection: {
    flex: 1,
  },
});
