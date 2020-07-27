/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../Profile/ProfileScreen';
import Color from '../Utils/Color';

export default class BottomNavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  screenChange = obj => {
    alert(obj);

    // if (this.props.name === 'HomeScreen') {
    //   this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    // } else if (this.props.name === 'ProfileScreen') {
    //   this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
    // } else if (this.props.name === 'Attendance') {
    //   this.props.navigation.dispatch(StackActions.replace('Attendance'));
    // } else {
    //   this.props.navigation.dispatch(StackActions.replace('Notification'));
    // }
  };

  //   onClickListener = viewId => {
  //     if (viewId === 'profile') {
  //       this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
  //     } else if (viewId === 'attendance') {
  //       this.props.navigation.dispatch(StackActions.replace('Attendance'));
  //     } else if (viewId === 'notification') {
  //       this.props.navigation.dispatch(StackActions.replace('Notification'));
  //     }
  //   };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Color.Maroon,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            borderRightColor: 'white',
            borderRightWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => this.screenChange(this.props.name)}>
            <Ionicons color="white" size={50} name={'md-home'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            borderRightColor: 'white',
            borderRightWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => this.screenChange(this.props.name)}>
            <Ionicons color="white" size={50} name={'md-calendar'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            borderRightColor: 'white',
            borderRightWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => this.screenChange(this.props.name)}>
            <Ionicons color="white" size={50} name={'md-notifications'} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ProfileScreen')}>
            <Ionicons color="white" size={50} name={'md-person'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
