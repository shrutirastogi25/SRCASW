import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Login/SplashScreen';
import Login from './src/Login/Login';
import ResetPassword from './src/Login/ResetPassword';
import TeacherSignup from './src/Login/TeacherSignup';
import HomeScreen from './src/Home/HomeScreen';
import ProfileScreen from './src/Profile/ProfileScreen';
import Option from './src/Login/Option';
import StudentSignup from './src/Login/StudentSignup';
import NewPassword from './src/Login/NewPassword';
import EmailOtp from './src/Login/EmailOtp';
import Notification from './src/Notifications/Notification';
import Attendance from './src/Attendance/Attendance';
import AttendanceTeacher from './src/Attendance/AttendanceTeacher';
import AddAttendance from './src/Attendance/AddAttendance';
import About from './src/Profile/About';
import Settings from './src/Profile/Settings';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <Stack.Screen
          options={{
            headerTitle: 'Change Password',
            headerLeft: () => (
              <TouchableOpacity onPress={() => alert('this is a button')}>
                <Ionicons size={20} name={'md-arrow-round-back'} />
              </TouchableOpacity>
            ),
          }}
          name="ResetPassword"
          component={ResetPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EmailOtp"
          component={EmailOtp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="NewPassword"
          component={NewPassword}
        />
        <Stack.Screen name="TeacherSignup" component={TeacherSignup} />
        <Stack.Screen name="StudentSignup" component={StudentSignup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="AddAttendance" component={AddAttendance} />
        <Stack.Screen name="AttendanceTeacher" component={AttendanceTeacher} />
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
