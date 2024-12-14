import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Tab' component={TabNavigator} options={
          {
            animation: 'slide_from_bottom'
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
