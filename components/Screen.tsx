import { globalStyles } from '@/theme/styles';
import React from 'react';
import { Text, View, ViewProps } from 'react-native';

export default function Screen({ style, ...props }: ViewProps) {
  return <View style={[globalStyles.centeredScreen, style]} {...props} />;
}
