import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

import { ThemeContext } from '../../themeProvider/themeContext';
import { useAuth, useUser } from '@realm/react';
import { FontAwesome } from '@expo/vector-icons';
import { ScaledSheet, ms, s, vs } from 'react-native-size-matters';
import { Button } from 'react-native-elements';

export default function Layout() {
  const { user } = useUser();

  return (
    <Drawer drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
      <Drawer.Screen name="createUser" options={{ headerShown: false }} />
    </Drawer>
  );
}

const CustomDrawer = (props: any) => {
  const user = useUser();
  const { logOut } = useAuth();
  const image = null;
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
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
          <Text style={[styles.userName, { color: theme.text }]}>John Doe</Text>
          <Text style={[styles.userEmail, { color: theme.text }]}>
            john@email.com
          </Text>
        </View>
      </View>
      {/* ___ Home Screen ___ */}
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == '/feed' ? '#fff' : '#000'}
          />
        )}
        label={'Home'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/feed' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/feed' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('(tabs)');
        }}
      />
      {/* ___ Profile Screen ___ */}
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == '/profile' ? '#fff' : '#000'}
          />
        )}
        label={'Profile'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/profile' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/profile' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/Profile');
        }}
      />
      {/* ___ Settings Screen ___ */}
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
