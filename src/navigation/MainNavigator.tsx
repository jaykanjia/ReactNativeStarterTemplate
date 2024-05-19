import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNScreen from '../screens/RNScreen';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="ReactNative" component={RNScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
