import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Login/SplashScreen';
import Login from './src/Login/Login';
import ResetPassword from './src/Login/ResetPassword';
import Signup from './src/Login/Signup';
import HomeScreen from './src/Home/HomeScreen';
import ProfileScreen from './src/Profile/ProfileScreen';
import Option from './src/Login/Option';
import StudentSignup from './src/Login/StudentSignup';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={Login}
        />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="StudentSignup" component={StudentSignup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="Option"
          component={Option}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
