import React, { forwardRef, useContext, useMemo } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ms, s, vs } from 'react-native-size-matters';
import { useAuth } from '@realm/react';
import { ThemeContext } from '../../themeProvider/themeContext';

import { FontAwesome } from '@expo/vector-icons';
import CustomBackdrop from './CustomBackDrop';
type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const name = 'dima';
  const image = null;
  const { logOut } = useAuth();
  // const pathname = usePathname();
  const { theme } = useContext(ThemeContext);
  // variables
  const snapPoints = useMemo(() => ['75%'], []);

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={CustomBackdrop}
      backgroundStyle={styles.SheetModal}
    >
      <View style={styles.container}>
        <View style={[styles.userInfoWrapper]}>
          {image ? (
            <Image
              source={{ uri: image }}
              width={s(90)}
              height={vs(90)}
              style={styles.userImg}
            />
          ) : (
            <FontAwesome
              name="user-circle-o"
              size={ms(90)}
              color={theme.text}
            />
          )}
          <View style={styles.userDetailsWrapper}>
            <Text style={[styles.userName, { color: theme.text }]}>{name}</Text>
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  SheetModal: {
    backgroundColor: 'darkgrey',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: ms(10),
    paddingVertical: ms(20),
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: ms(10),
  },
  userImg: {
    borderRadius: ms(40),
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
export default CustomBottomSheetModal;
