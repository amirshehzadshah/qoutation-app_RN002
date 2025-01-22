import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';
import ViewQoutation from './src/screens/ViewQoutation';
import NewQoutation from './src/screens/NewQoutation';
import UserDetails from './src/screens/UserDetails';

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
        <Stack.Screen name='UserDetails' component={UserDetails} options={
          {
            animation: 'slide_from_bottom'
          }
        }/>
        <Stack.Screen name="NewQoutation" component={NewQoutation} options={
          {
            animation: 'slide_from_bottom'
          }
        }/>
        <Stack.Screen name="NewFormData" component={ViewQoutation} options={
          {
            animation: 'slide_from_bottom'
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
