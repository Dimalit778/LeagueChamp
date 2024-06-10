import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';
export default function BottomSheet() {
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  return (
    <View style={styles.container}>
      <BottomSheet snapPoints={snapPoints}>
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});
