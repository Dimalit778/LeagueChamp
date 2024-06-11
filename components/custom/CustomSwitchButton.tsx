import React, { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../themeProvider/themeContext';
import Toggle from 'react-native-toggle-element';
import { ms } from 'react-native-size-matters';

const CustomSwitchToggle = ({ onPress }: { onPress: () => void }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <Toggle
      value={!isDarkMode}
      onPress={onPress}
      thumbInActiveComponent={
        <MaterialIcons name="dark-mode" size={ms(24)} color="black" />
      }
      thumbActiveComponent={
        <MaterialIcons name="light-mode" size={ms(24)} color="black" />
      }
      trackBar={{
        activeBackgroundColor: '#86c3d7',
        inActiveBackgroundColor: '#3c4145',
        borderActiveColor: '#fff',
        borderInActiveColor: '#1c1c1c',
        borderWidth: 3,

        width: 100,
      }}
    />
  );
};

export default CustomSwitchToggle;
