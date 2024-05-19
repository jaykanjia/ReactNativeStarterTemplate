import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Theme, useTheme} from '@react-navigation/native';

type Props = PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
  color?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const RNButton = ({onPress, children, color, style}: Props) => {
  const theme = useTheme();

  const stl = styles(theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[stl.button, style]}>
        <Text style={[stl.text, {color: color || theme.colors.background}]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RNButton;

const styles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      display: 'flex',
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    text: {
      fontSize: 22,
    },
  });
