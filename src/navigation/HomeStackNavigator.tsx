import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import RNScreen from '../screens/RNScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeSvg from '../assets/icons/home.svg';
import SettingSvg from '../assets/icons/settings.svg';
import ReactNativeSvg from '../assets/icons/react-native.svg';

type IconProps = {
  color: string;
  size: number;
};

const HomeIcon = ({color, size}: IconProps) => (
  <HomeSvg stroke={color} height={size} width={size} />
);

const SettingsIcon = ({color, size}: IconProps) => (
  <SettingSvg stroke={color} height={size} width={size} />
);

const ReactNativeIcon = ({color, size}: IconProps) => (
  <ReactNativeSvg fill={color} height={size} width={size} />
);

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
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarActiveTintColor: '#e91e63',
          tabBarIcon: SettingsIcon,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="ReactNativeTab"
        component={RNScreen}
        options={{
          headerShown: false,
          title: 'React Native',
          tabBarActiveTintColor: '#e91e63',
          tabBarIcon: ReactNativeIcon,
          tabBarBadge: 'New',
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStackNavigator;
