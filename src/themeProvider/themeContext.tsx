import React, { createContext, useState, ReactNode } from 'react';

interface Theme {
  text: string;
  background: string;
  primary: string;
  border: string;
  navbar: string;
}

const lightTheme: Theme = {
  text: '#0D2117',
  border: '#9F9F9F',
  primary: '#333333',
  background: '#F7EAEB',
  navbar: '#F2F8F4',
};

const darkTheme: Theme = {
  text: '#DEF2E8',
  border: '#908d96',
  primary: '#D9B993',
  background: '#2F4F4F',
  navbar: '#000000',
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
