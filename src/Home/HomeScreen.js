/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../Utils/Color';
import BottomNavBar from '../CommonComponents/BottomNavBar';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  // onClickListener = viewId => {
  //   if (viewId === 'profile') {
  //     this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
  //   } else if (viewId === 'attendance') {
  //     this.props.navigation.dispatch(StackActions.replace('Attendance'));
  //   } else if (viewId === 'notification') {
  //     this.props.navigation.dispatch(StackActions.replace('Notification'));
  //   }
  // };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 9}} >
          <Text>Hello</Text>
        </View>
        <View style={{flex: 1}}>
          <BottomNavBar name={'HomeScreen'} />
        </View>
      </View>
    );
  }
}
