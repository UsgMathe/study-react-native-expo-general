import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Ionicons name="logo-react" size={100} color={Colors.primary} />
      <Text
        style={{
          color: Colors.text,
          fontSize: 20,
          marginTop: 10,
          fontWeight: 'bold',
        }}
      >
        React Native Expo Study Project
      </Text>
      <Text style={{ color: Colors.text }}>
        This is a repository with general react native expo studies
      </Text>
    </View>
  );
}
