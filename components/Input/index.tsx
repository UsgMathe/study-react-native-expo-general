import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import InputBox from './Input.Box';

function Input({ style, ...props }: ViewProps) {
  return <View style={[styles.input, style]} {...props} />;
}

Input.Box = InputBox;

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    backgroundColor: '#ffffff9',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});
