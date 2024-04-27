import { View, Text, Platform } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const ios = Platform.OS === 'ios';
export default function CustomKeyboardView({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={ios ? 100 : 0}
        behavior="padding"
      >
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
