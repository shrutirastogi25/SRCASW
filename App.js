
import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Login/SplashScreen';
import Login from './src/Login/Login';
// import { View } from 'react-native';

const Stack = createStackNavigator();
function App() {
  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen 
    options={{headerShown:false}}
    name='SplashScreen'
    component={SplashScreen}/>
    <Stack.Screen 
    options={{headerShown:false}}
    name='LoginScreen'
    component={Login}/>
</Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
