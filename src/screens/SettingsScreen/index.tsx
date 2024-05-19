import {
  View,
  Text,
  StyleSheet,
  Button,
  Vibration,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import InputContainer from '../../components/InputContainer';
import RNButton from '../../components/common/RNButton';

const SettingsScreen = ({navigation}: any) => {
  const [isVibrating, setIsVibrating] = useState(false);

  const handleButtonPress = () => {
    setIsVibrating(true);

    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      2 * ONE_SECOND_IN_MS,
      3 * ONE_SECOND_IN_MS,
    ];

    Vibration.vibrate(PATTERN, true);
  };

  const handleCancelButton = () => {
    Vibration.cancel();
    setIsVibrating(false);
  };

  const handleChangeScreen = () => {
    if (navigation) {
      navigation.navigate('Welcome');
    } else {
      console.log('Error while changing screen');
    }
  };

  const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Demo Screen</Text>
      <Text style={styles.heading2}>stack navigation</Text>
      <RNButton
        onPress={handleChangeScreen}
        color="#ffffff"
        style={styles.navigationButoon}>
        Go to Welcome Screen
      </RNButton>
      <Text style={styles.heading2}>Handle Input</Text>
      <InputContainer />
      <Button title="Click Me" color="#007AFF" onPress={handleButtonPress} />
      <RNButton
        onPress={handleButtonPress}
        color="white"
        style={styles.startButton}>
        Custom Button
      </RNButton>
      {isVibrating && (
        <View style={styles.hiddenContainer}>
          <Text>{PATTERN_DESC}</Text>
          <RNButton
            onPress={handleCancelButton}
            color="white"
            style={styles.stopButton}>
            Stop vibration
          </RNButton>
        </View>
      )}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 30,
    fontWeight: 'semibold',
  },
  heading3: {
    fontSize: 20,
  },
  hiddenContainer: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  navigationButoon: {
    backgroundColor: '#673ab7',
  },
  startButton: {
    backgroundColor: '#007AFF',
  },
  stopButton: {
    backgroundColor: '#FF1500',
  },
});
