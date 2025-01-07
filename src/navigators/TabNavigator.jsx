import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Qoutations from '../screens/Qoutations';
import PlusButton from '../components/PlusButton';

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
          component={Qoutations}
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
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -30 }],
    zIndex: 1,
  },
});
