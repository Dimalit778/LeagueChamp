import React, { forwardRef, useContext, useMemo } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
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
import { Link, router, usePathname, useRouter } from 'expo-router';
import CustomButton from '../custom/CustomButton';

type Ref = BottomSheetModal;
type Theme = {
  text: string;
  background: string;
  primary: string;
  border: string;
  navbar: string;
};
const CustomBottomSheetModal = forwardRef<Ref>(({}, ref) => {
  const { name, image } = useUser().customData;
  const { logOut } = useAuth();
  const { theme, isDarkMode, setIsDarkMode } = useContext(ThemeContext);
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
        <UserInfo name={name} image={image} theme={theme} />
        <NavigationItems dismiss={dismiss} theme={theme} />
        <View style={styles.bottom}>
          <CustomSwitchToggle
            isDarkMode={isDarkMode}
            onPress={() => setIsDarkMode(!isDarkMode)}
          />
          <LogoutButton logOut={logOut} theme={theme} />
        </View>
      </View>
    </BottomSheetModal>
  );
});

interface UserInfoProps {
  name: string;
  image?: string;
  theme: Theme;
}

const UserInfo = React.memo(({ name, image, theme }: UserInfoProps) => (
  <View style={[styles.userInfoWrapper, { borderBottomColor: theme.text }]}>
    <Image
      source={
        image ? { uri: image } : require('../../myAssets/images/avatar.jpg')
      }
      style={styles.userImg}
      resizeMode="cover"
    />

    <Text style={styles.userName}>{name}</Text>
  </View>
));
type NavItemsProps = {
  dismiss: () => void;
  theme: Theme;
};
const NavigationItems = ({ dismiss, theme }: NavItemsProps) => (
  <>
    <Pressable
      onPress={() => {
        router.push('/MyLeagues');
        dismiss();
      }}
    >
      <View style={[styles.navItem, { backgroundColor: theme.background }]}>
        <AntDesign name="menu-fold" size={24} color={theme.text} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.text }}>
          My Leagues
        </Text>
      </View>
    </Pressable>
    <Pressable
      onPress={() => {
        router.push('/Profile');
        dismiss();
      }}
    >
      <View style={[styles.navItem, { backgroundColor: theme.background }]}>
        <AntDesign name="user" size={28} color={theme.text} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.text }}>
          Profile
        </Text>
      </View>
    </Pressable>
    <Pressable
      onPress={() => {
        router.push('/Settings');
        dismiss();
      }}
    >
      <View style={[styles.navItem, { backgroundColor: theme.background }]}>
        <Ionicons name="settings-outline" size={24} color={theme.text} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.text,
          }}
        >
          Settings
        </Text>
      </View>
    </Pressable>
  </>
);

const LogoutButton = ({ logOut, theme }) => (
  <CustomButton
    bgColor={theme.background}
    textColor={theme.text}
    boRadius={10}
    textFont={18}
    btnLabel="Log out"
    onPress={logOut}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ms(24),
  },

  navItem: {
    flexDirection: 'row',
    padding: ms(10),
    marginHorizontal: ms(40),
    borderRadius: ms(5),
    marginBottom: ms(10),
    alignItems: 'center',
    gap: ms(15),
  },

  userInfoWrapper: {
    alignItems: 'center',
    paddingVertical: ms(10),
    borderBottomWidth: 1,
    marginBottom: ms(10),
    gap: ms(10),
  },
  userImg: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    width: s(120),
    height: vs(120),
  },

  userName: {
    fontSize: 24,
    color: 'black',
  },

  bottom: {
    flex: 1,

    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default CustomBottomSheetModal;
