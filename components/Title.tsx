import { globalStyles } from '@/theme/styles';
import React from 'react';
import { Text, TextProps } from 'react-native';

export default function Title({ style, ...props }: TextProps) {
  return <Text style={[globalStyles.title, style]} {...props} />;
}
