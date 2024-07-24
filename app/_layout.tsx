import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
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
          // style
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
        {/* <Drawer.Screen
          name="user/[id]"
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
