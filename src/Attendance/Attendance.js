/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-material-dropdown';
import Color from '../Utils/Color';

export default class Attendance extends Component {
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
        <View style={{flex: 9, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Dropdown label="Year" data={year} />
          </View>
          <View style={{flex: 1}}>
            <Dropdown label="Subject" data={subject} />
          </View>
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
