import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native-gesture-handler';

function Button({ style, ...props }: TouchableOpacityProps) {
  return <TouchableOpacity style={[styles.button, style]} {...props} />;
}

function ButtonText({ style, ...props }: TextProps) {
  return <Text style={[styles.text, style]} {...props} />;
}

Button.Text = ButtonText;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: { color: Colors.text, fontWeight: 'semibold' },
});

export default Button;
