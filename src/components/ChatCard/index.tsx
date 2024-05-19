import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';

type CardProps = {name: string; imageUri: string};

const ChatCard = ({name, imageUri}: CardProps): React.JSX.Element => {
  const onPress = ({cardName}: {cardName: string}) => {
    Alert.alert('Alert Title', `You Pressed ${cardName}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const btnStyle = buttonStyle();

  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        alt="image"
        source={{
          uri: imageUri || 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.cardTitle}>{name}</Text>
      <TouchableOpacity
        style={btnStyle.cardButton}
        onPress={() => onPress({cardName: name})}>
        <Text style={btnStyle.text}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  cardTitle: {
    fontSize: 18,
    flex: 1,
  },
  cardImage: {
    width: '20%',
    aspectRatio: '1/1',
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderColor: 'gray',
  },
});

const buttonStyle = () =>
  StyleSheet.create({
    cardButton: {
      alignItems: 'center',
      backgroundColor: '#673ab7',
      padding: 10,
    },
    text: {color: '#DDDDDD'},
  });
