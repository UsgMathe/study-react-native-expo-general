import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export default function Subtitle({ style, ...props }: TextProps) {
  return <Text style={[styles.text, style]} {...props} />;
}

const styles = StyleSheet.create({
  text: { color: Colors.text, textAlign: 'center' },
});
