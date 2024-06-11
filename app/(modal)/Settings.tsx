import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { ScaledSheet } from 'react-native-size-matters';
import CustomKeyboardView from '../../components/custom/CustomKeyboardView';
import { Ionicons } from '@expo/vector-icons';
const Settings = () => {
  console.log('Settings');
  const router = useRouter();
  return (
    <CustomKeyboardView>
      <View style={styles.box}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>One</Text>
      </View>
      <View style={styles.box}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>Two</Text>
      </View>
      <View style={styles.box}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>Three</Text>
      </View>
      <View style={styles.box}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>Four</Text>
      </View>
    </CustomKeyboardView>
  );
};

export default Settings;
const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'gold',
    // margin: 5,
  },
});
