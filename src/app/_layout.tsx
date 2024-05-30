import 'react-native-get-random-values';
import React, { useReducer } from 'react';
import { Stack } from 'expo-router';

import { ThemeProvider } from '../themeProvider/themeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import RealmCustomProvider from '../realm/Realm';
import combined from '../redux/reducers';
import { initialState } from '../redux/constans/hooks';
import MatchesContext from './../redux/context';
import { getRoundMatches, getSingleMatch } from '../redux/actions/matches';
const RootLayout = () => {
  const [state, dispatch] = useReducer(combined, initialState);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <MatchesContext.Provider
          value={{
            ...state,
            getSingleMatch: getSingleMatch.bind(null, dispatch),
            getRoundMatches: getRoundMatches.bind(null, dispatch),
          }}
        >
          <ThemeProvider>
            <RealmCustomProvider>
              <StatusBar style="light" />
              <Stack screenOptions={{ headerShown: false }} />
            </RealmCustomProvider>
          </ThemeProvider>
        </MatchesContext.Provider>
      </Provider>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
