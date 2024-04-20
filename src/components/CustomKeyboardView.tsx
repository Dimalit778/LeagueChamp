import { View, Text, Platform } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

export default function CustomKeyboardView({ children }: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
