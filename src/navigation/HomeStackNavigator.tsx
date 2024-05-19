import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import RNScreen from '../screens/RNScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Text} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// type IconProps = {
//   color: string;
//   size: number;
// };

// const ChatIcon = ({color, size}: IconProps) => (
//   <MaterialCommunityIcons name="chat" color={color} size={size} />
// );

// const SettingsIcon = ({color, size}: IconProps) => (
//   <MaterialCommunityIcons name="bell" color={color} size={size} />
// );

// const LearnIcon = ({color, size}: IconProps) => (
//   <MaterialCommunityIcons name="react" color={color} size={size} />
// );

const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarActiveTintColor: '#e91e63',
          // tabBarIcon: () => <Text>Home</Text>,
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarActiveTintColor: '#e91e63',
        }}
      />
      <Tab.Screen
        name="ReactNativeTab"
        component={RNScreen}
        options={{
          headerShown: false,
          title: 'React Native',
          tabBarActiveTintColor: '#e91e63',
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStackNavigator;
