import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNScreen from '../screens/RNScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeStackNavigator from './HomeStackNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeStackNavigator} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="ReactNative" component={RNScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
