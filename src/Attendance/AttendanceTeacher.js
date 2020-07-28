/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-material-dropdown';
import Color from '../Utils/Color';
import BottomNavBar from '../CommonComponents/BottomNavBar';

export default class AttendanceTeacher extends Component {
  constructor(props) {
    super(props);
  }
  onClickListener = viewId => {
    if (viewId === 'profile') {
      this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
    } else if (viewId === 'home') {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    } else if (viewId === 'notification') {
      this.props.navigation.dispatch(StackActions.replace('Notification'));
    } else if (viewId === 'add') {
        this.props.navigation.dispatch(StackActions.replace('AddAttendance'));
      }
  };
  render() {
    let year = [
      {
        value: 'First',
      },
      {
        value: 'Second',
      },
      {
        value: 'Third',
      },
    ];
    let subject = [
      {
        value: 'C++',
      },
      {
        value: 'Java Programming',
      },
      {
        value: 'Discrete Mathematics',
      },
      {
        value: 'Operating Systems',
      },
      {
        value: 'Computer Networks',
      },
      {
        value: 'Data Structures',
      },
      {
        value: 'Android Programming',
      },
      {
        value: 'PHP',
      },
      {
        value: 'Database Management System',
      },
      {
        value: 'Software Engineering',
      },
      {
        value: 'Algorithms',
      },
    ];

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 7.5, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Dropdown label="Year" data={year} />
          </View>
          <View style={{flex: 1}}>
            <Dropdown label="Subject" data={subject} />
          </View>
        </View>
        <View style={{flex: 1.5, marginBottom: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: Color.Maroon,
              borderRadius: 50,
              alignSelf: 'flex-end',
              margin: 15,
              marginBottom: 15,
              elevation: 10,
              height: 75,
              width: 75,
              justifyContent: 'center',
              alignItems: 'center',
            }} onPress={() => this.onClickListener('add')}>
            <Ionicons
              color="white"
              size={50}
              name={'md-add'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
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
            <TouchableOpacity onPress={() => this.onClickListener('home')}>
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
            <TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => this.onClickListener('notification')}>
              <Ionicons color="white" size={50} name={'md-notifications'} />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.onClickListener('profile')}>
              <Ionicons color="white" size={50} name={'md-person'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
