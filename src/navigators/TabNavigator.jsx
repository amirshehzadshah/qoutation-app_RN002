import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Quatation from '../screens/Quatation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'blue',   // Active tab color
                tabBarInactiveTintColor: 'gray', // Inactive tab color
    }}>
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({focused, color}) => (
                <Ionicons name={focused ? "home" : "home-outline"} color={color} size={30} />
            )
        }} />
        <Tab.Screen name='Quatation' component={Quatation} options={{
            tabBarIcon: ({focused, color}) => (
                <Ionicons name={focused ? "document-text" : "document-text-outline"} color={color} size={30} />
            )
        }} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})