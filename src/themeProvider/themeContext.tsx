import React, { createContext, useState, ReactNode } from 'react';

interface Theme {
  text: string;
  background: string;
  primary: string;
  border: string;
}

const lightTheme: Theme = {
  text: '#616161',
  border: '#9F9F9F',
  primary: '#333333',
  background: '#ffffff',
};

const darkTheme: Theme = {
  text: '#dadada',
  border: '#444859',
  primary: '#f9f9f9',
  background: '#121212',
};

interface ThemeContextProps {
  theme: Theme;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme, // Default theme
  isDarkMode: false, // Default dark mode setting
  setIsDarkMode: () => {}, // Default setter function
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
