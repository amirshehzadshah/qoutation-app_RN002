import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Qoutation from '../screens/Qoutation';
import PlusButton from '../components/PlusButton'; // Import your PlusButton component

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Qoutation"
          component={Qoutation}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? 'document-text' : 'document-text-outline'} color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
      <View style={styles.buttonContainer}>
        <PlusButton />
      </View>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Adjust the bottom distance as needed
    left: '50%',
    transform: [{ translateX: -30 }], // This centers the button horizontally
    zIndex: 1, // Ensures the button is on top of the tab bar
  },
});
