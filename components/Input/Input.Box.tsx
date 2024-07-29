import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export default function InputBox({ style, ...props }: TextInputProps) {
  return (
    <TextInput
      cursorColor={Colors.primary}
      placeholderTextColor={Colors.disabledText}
      style={[styles.box, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    color: Colors.text,
  },
});
