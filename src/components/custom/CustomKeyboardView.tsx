import { View, Text, Platform } from 'react-native';
import React, { PropsWithChildren, useContext } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../themeProvider/themeContext';
const ios = Platform.OS === 'ios';

export default function CustomKeyboardView({ children }: PropsWithChildren) {
  const { theme } = useContext(ThemeContext);
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.background }}
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
    // </SafeAreaView>
  );
}
