import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  centeredScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: Colors.text,
    fontSize: 20,
    marginVertical: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
