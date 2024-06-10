import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { ScaledSheet, ms, s, vs } from 'react-native-size-matters';
import { useAuth, useUser } from '@realm/react';
import { usePathname, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../../themeProvider/themeContext';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Button } from 'react-native-elements';

const CustomDrawer = (props: any) => {
  const user = useUser();
  // const { name, image } = user.customData;
  const name = 'dima';
  const image = null;
  const { logOut } = useAuth();
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  console.log(' --------- >CustomDrawer');
  // console.log('--->', name);

  const performLogout = () => {
    logOut();
  };
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: theme.background }}
    >
      <View style={[styles.userInfoWrapper]}>
        {image ? (
          <Image
            source={{ uri: image }}
            width={s(90)}
            height={vs(90)}
            style={styles.userImg}
          />
        ) : (
          <FontAwesome name="user-circle-o" size={ms(90)} color={theme.text} />
        )}
        <View style={styles.userDetailsWrapper}>
          <Text style={[styles.userName, { color: theme.text }]}>{name}</Text>
        </View>
      </View>
      {/*//@ --> My Leagues Screen <-- */}
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == '/feed' ? '#fff' : '#000'}
          />
        )}
        label="My Leagues"
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/feed' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/feed' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('MyLeagues');
        }}
      />
      {/*//@ --> Profile Screen <-- */}
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == '/profile' ? '#fff' : '#000'}
          />
        )}
        label="Profile"
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/profile' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/profile' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/Profile');
        }}
      />

      {/*//@ --> Settings Screen <-- */}
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname == '/settings' ? '#fff' : '#000'}
          />
        )}
        label={'Settings'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/settings' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/settings' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/Settings');
        }}
      />

      <View style={{ alignSelf: 'center' }}>
        <Button title="LOG out" onPress={() => logOut()} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
const styles = ScaledSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: '10@ms',
    paddingVertical: '20@ms',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: '10@ms',
  },
  userImg: {
    borderRadius: '40@ms',
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
