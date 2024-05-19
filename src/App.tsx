import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
