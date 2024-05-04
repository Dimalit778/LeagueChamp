import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { Button, Switch } from 'react-native-elements';
import { Touchable, TouchableWithoutFeedbackComponent } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';

interface ToggleButtonProps {
  onPress: () => void;
}

const SwitchTheme: React.FC<ToggleButtonProps> = ({ onPress }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <TouchableWithoutFeedback
      onPress={handleToggle}
      style={{ paddingEnd: ms(20) }}
    >
      {!isDarkMode ? (
        <MaterialIcons name="light-mode" size={ms(24)} color="black" />
      ) : (
        <MaterialIcons name="dark-mode" size={ms(24)} color="white" />
      )}
    </TouchableWithoutFeedback>
    // <Switch
    //   color="#2089dc"
    //   value={isDarkMode}
    //   onValueChange={() => setIsDarkMode(!isDarkMode)}
    // />
  );
};

export default SwitchTheme;
