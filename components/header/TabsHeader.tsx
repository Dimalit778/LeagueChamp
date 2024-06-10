import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useContext, useMemo, useRef } from 'react';
import { Image } from 'expo-image';

import { ms, s, vs } from 'react-native-size-matters';
import { ThemeContext } from '../../themeProvider/themeContext';
import { useAppSelector } from '../../redux/constans/hooks';
import { Feather } from '@expo/vector-icons';

type openModal = {
  openModal: () => void;
};

const TabsHeader = ({ openModal: openModal }) => {
  const { theme } = useContext(ThemeContext);
  const { name, emblem } = useAppSelector((state) => state.league);

  return (
    <View style={[styles.headerContainer, { backgroundColor: theme.navbar }]}>
      {/* Drawer Button */}
      <View style={styles.drawerButton}>
        <Pressable onPress={openModal}>
          <Feather name="settings" size={24} color="white" />
        </Pressable>
      </View>
      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      {/* Image */}
      <View style={styles.logo}>
        <Image source={{ uri: emblem }} style={styles.emblem} />
      </View>
    </View>
  );
};

export default TabsHeader;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: vs(50),
  },
  //Title Styles
  title: {
    flex: 1,

    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#FFFFFF',
  },
  // Image Styles
  logo: {
    alignItems: 'flex-end',
    padding: ms(4),
    marginRight: s(10),
    backgroundColor: 'white',
    borderRadius: 10,
  },
  emblem: {
    height: 37,
    width: 37,
  },
  // Drawer Button Styles
  drawerButton: {
    marginLeft: s(10),
  },
});