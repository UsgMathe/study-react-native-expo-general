import { Colors } from '@/constants/Colors';
import { initializeDatabase } from '../database/initializeDatabase';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="to_do_list.db" onInit={initializeDatabase}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <Drawer
          screenOptions={{
            sceneContainerStyle: {
              backgroundColor: Colors.background,
            },
            drawerStyle: {
              backgroundColor: Colors.background,
            },
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerTitleStyle: { color: Colors.text },
            headerTintColor: Colors.text,
            drawerLabelStyle: { color: Colors.text },
            drawerInactiveBackgroundColor: 'transparent',
            drawerActiveBackgroundColor: Colors.primary,
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'overview',
              drawerIcon: () => (
                <Ionicons name="home" size={20} color={Colors.text} />
              ),
            }}
          />
          <Drawer.Screen
            name="counter"
            options={{
              drawerLabel: 'Counter',
              drawerIcon: () => (
                <Ionicons name="add" size={20} color={Colors.text} />
              ),
            }}
          />
          <Drawer.Screen
            name="to-do-list"
            options={{
              drawerLabel: 'To Do List',
              drawerIcon: () => (
                <Ionicons name="list" size={20} color={Colors.text} />
              ),
            }}
          />
        </Drawer>
        <Link
          href="https://github.com/UsgMathe"
          style={{
            position: 'absolute',
            alignSelf: 'center',
            bottom: 16,
          }}
        >
          <Text style={{ color: Colors.text }}>@UsgMathe</Text>
        </Link>
      </GestureHandlerRootView>
    </SQLiteProvider>
  );
}
