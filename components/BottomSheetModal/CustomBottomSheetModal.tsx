import React, {
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BottomSheet, {
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { ms, s, vs } from 'react-native-size-matters';
import { useAuth, useUser } from '@realm/react';
import { ThemeContext } from '../../themeProvider/themeContext';
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import CustomBackdrop from './CustomBackDrop';

import CustomSwitchToggle from '../custom/CustomSwitchButton';
import { Link, usePathname } from 'expo-router';
import CustomButton from '../custom/CustomButton';
type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const user = useUser();
  const { name, image } = user.customData;
  console.log('tob ', user.customData);

  const { logOut } = useAuth();
  const pathname = usePathname();
  console.log('pathname', pathname);
  const { theme } = useContext(ThemeContext);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  // variables
  const { dismiss } = useBottomSheetModal();
  const snapPoints = useMemo(() => ['80%'], []);
  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={CustomBackdrop}
      backgroundStyle={{ backgroundColor: theme.border }}
    >
      <View style={styles.container}>
        <View style={styles.userInfoWrapper}>
          {image ? (
            <Image
              source={{ uri: image }}
              width={s(80)}
              height={vs(80)}
              style={styles.userImg}
            />
          ) : (
            <FontAwesome
              name="user-circle-o"
              size={ms(80)}
              color={theme.text}
            />
          )}
          <View style={styles.userDetailsWrapper}>
            <Text style={[styles.userName, { color: theme.text }]}>{name}</Text>
          </View>
        </View>

        <Link
          href={'/MyLeagues'}
          style={styles.navItem}
          onPress={() => dismiss()}
        >
          <AntDesign
            name="menu-fold"
            size={24}
            color={pathname == '/profile' ? '#fff' : '#000'}
          />

          <Text style={styles.navText}>My Leagues</Text>
        </Link>
        <Link
          href={'/Profile'}
          style={styles.navItem}
          onPress={() => dismiss()}
        >
          <AntDesign
            name="user"
            size={28}
            color={pathname == '/profile' ? '#fff' : '#000'}
          />
          <Text style={styles.navText}>Profile</Text>
        </Link>

        <Link
          href={'(modal)/Settings'}
          style={styles.navItem}
          onPress={() => dismiss()}
        >
          <Ionicons
            name="settings-outline"
            size={24}
            color={pathname == '/settings' ? '#fff' : '#000'}
          />
          <Text style={styles.navText}>Settings</Text>
        </Link>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={styles.downBtns}>
            {/* <Button title="LOG out" onPress={() => logOut()} /> */}
            <CustomButton
              bgColor={theme.background}
              textColor={theme.text}
              boRadius={10}
              textFont={18}
              btnLabel="Log out"
              onPress={() => logOut()}
            />
            {/* <SwitchTheme /> */}
            <CustomSwitchToggle onPress={() => setIsDarkMode(!isDarkMode)} />
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  navItem: {
    backgroundColor: 'lightgrey',
    padding: ms(10),
    marginHorizontal: ms(40),
    borderRadius: ms(5),
    marginBottom: ms(10),
  },
  navText: {
    fontSize: 20,
  },

  userInfoWrapper: {
    flexDirection: 'row',

    justifyContent: 'space-around',
    // paddingHorizontal: ms(10),
    paddingVertical: ms(10),
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
  downBtns: { flexDirection: 'row', justifyContent: 'space-between' },
});
export default CustomBottomSheetModal;
