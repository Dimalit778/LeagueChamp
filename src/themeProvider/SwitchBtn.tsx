import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { Button, Switch } from 'react-native-elements';

interface ToggleButtonProps {
  onPress: () => void;
}

const SwitchTheme: React.FC<ToggleButtonProps> = ({ onPress }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch
      color="#2089dc"
      value={isDarkMode}
      onValueChange={() => setIsDarkMode(!isDarkMode)}
    />
  );
};

export default SwitchTheme;
