import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/theme/styles';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={globalStyles.centeredScreen}>
      <Ionicons name="logo-react" size={100} color={Colors.primary} />
      <Text style={styles.title}>React Native Expo Study Project</Text>
      <Text style={styles.text}>
        A repository with general studies of React Native with Expo
      </Text>

      <Link
        href="https://github.com/UsgMathe/study-reactnative-expo-general"
        style={styles.link}
      >
        <View style={globalStyles.iconTextContainer}>
          <Ionicons name="logo-github" size={15} color={Colors.text} />
          <Text style={styles.text}>See the repository</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.text,
    fontSize: 20,
    marginVertical: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.text,
    paddingBottom: 4,
    marginTop: 30,
  },

  text: { color: Colors.text, textAlign: 'center' },
});
