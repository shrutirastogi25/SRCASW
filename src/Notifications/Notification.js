/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNavBar from '../CommonComponents/BottomNavBar';
import Color from '../Utils/Color';

export default class Notification extends Component {
  constructor(props) {
    super(props);
  }
  onClickListener = viewId => {
    if (viewId === 'home') {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    } else if (viewId === 'attendance') {
      this.props.navigation.dispatch(StackActions.replace('Attendance'));
    } else if (viewId === 'notification') {
      this.props.navigation.dispatch(StackActions.replace('Notification'));
    } else if (viewId === 'login') {
      this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 9}}>
          <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
            <View style={{flex: 1}}>
              <Text>Hello</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Hello</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Hello</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Hello</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Hello</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Hello</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <BottomNavBar name={'Notification'} />
        </View>
      </View>
    );
  }
}
