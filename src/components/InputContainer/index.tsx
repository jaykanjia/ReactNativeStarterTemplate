import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const InputContainer = () => {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="default"
        keyboardAppearance="default"
        style={styles.inputField}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.inputText}>{text}</Text>
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
  },
  inputField: {
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  inputText: {
    padding: 10,
    fontSize: 24,
  },
});
