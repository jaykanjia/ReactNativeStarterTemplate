import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import RNButton from '../../components/common/RNButton';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        resizeMode="cover"
        style={[styles.container, styles.imageContainer]}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
        </View>
        <RNButton
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Get Started
        </RNButton>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  imageContainer: {
    paddingHorizontal: 24,
    paddingVertical: 64,
  },
  welcomeContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingVertical: 64,
  },
  welcomeText: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    width: '100%',
  },
});
