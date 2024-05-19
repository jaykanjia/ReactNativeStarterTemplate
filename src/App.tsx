import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNScreen from './screens/RNScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RNScreen />
    </NavigationContainer>
  );
};

export default App;
