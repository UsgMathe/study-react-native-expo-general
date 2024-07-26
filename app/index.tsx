import Button from '@/components/Button';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/theme/styles';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Link, useNavigation } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const navigation = useNavigation();
  return (
    <Screen>
      <Ionicons name="logo-react" size={100} color={Colors.primary} />
      <Text style={globalStyles.title}>React Native Expo Study Project</Text>
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

      <Button
        style={{ marginTop: 44 }}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Button.Text>See the exercises</Button.Text>
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  link: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.text,
    paddingBottom: 4,
    marginTop: 30,
  },
  text: { color: Colors.text, textAlign: 'center' },
});
