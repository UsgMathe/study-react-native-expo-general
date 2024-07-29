import { Colors, ColorsKeys } from '@/constants/Colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ButtonText } from './Button.Text';

type ButtonProps = TouchableOpacityProps & {
  variant?: ColorsKeys;
};

function Button({ style, variant = 'primary', ...props }: ButtonProps) {
  const styles = getStyles({ variant });
  return <TouchableOpacity style={[styles.button, style]} {...props} />;
}

type GetStylesProps = {
  variant: ColorsKeys;
};

const getStyles = ({ variant }: GetStylesProps) =>
  StyleSheet.create({
    button: {
      backgroundColor: Colors[variant],
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
  });

Button.Text = ButtonText;
export default Button;
