import React, { useContext, useRef, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Tabs, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from '../../themeProvider/themeContext';
import TabsHeader from '../../components/header/TabsHeader';
import CustomBottomSheetModal from '../../components/BottomSheetModal/CustomBottomSheetModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ms } from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';

// ICONS
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabArr = [
  {
    route: 'Matches',
    label: 'Matches',
    icon: (props) => <Ionicons name="football-outline" {...props} />,
  },
  {
    route: 'Standing',
    label: 'Standing',
    icon: (props) => <SimpleLineIcons name="chart" {...props} />,
  },
  {
    route: 'MyGames',
    label: 'My Games',
    icon: (props) => (
      <MaterialCommunityIcons name="target-account" {...props} />
    ),
  },
  {
    route: 'Home',
    label: 'Home',
    icon: (props) => <FontAwesome name="home" {...props} />,
  },
];

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: focused ? 'gold' : theme.navbar,
              borderRadius: 16,
            },
          ]}
        />
        <View
          style={[
            styles.btn,
            { backgroundColor: focused ? null : theme.navbar },
          ]}
        >
          {item.icon({ size: 36, color: focused ? theme.navbar : theme.text })}
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: theme.navbar,
                  paddingHorizontal: 8,
                }}
              >
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TabsLayout = (props) => {
  const { theme } = useContext(ThemeContext);
  const pathname = usePathname();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="black" />
      <TabsHeader openModal={openModal} />
      <CustomBottomSheetModal ref={bottomSheetRef} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navbar,
            height: ms(60),
            position: 'absolute',
            margin: 16,
            borderRadius: 16,
          },
        }}
      >
        {TabArr.map((item, index) => (
          <Tabs.Screen
            key={index}
            name={item.route}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});

export default TabsLayout;
