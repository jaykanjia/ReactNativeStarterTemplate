import {View, Text, Button} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default WelcomeScreen;
