/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../Utils/Color';

export default class ProfileScreen extends Component {
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
  createTwoButtonAlert = () =>
    Alert.alert(
      'Logout?',
      'Do you really want to logout?',
      [
        {
          text: 'Yes',
          onPress: () => this.onClickListener('login'),
          style: 'cancel',
        },
        {text: 'No', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 9}}>
          <View style={{flex: 3, flexDirection: 'row'}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              {/* <View style={{borderRadius: 30, elevation: 5}}> */}
              <Ionicons size={100} name={'md-person'} style={{elevation: 15}} />
              {/* </View> */}
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.darkText}>Shruti Rastogi</Text>
              <Text style={styles.lightText}>Computer Science</Text>
              <Text style={styles.lightText}>3rd year</Text>
            </View>
          </View>
          <View style={{flex: 9}}>
            <View style={{flex: 8, backgroundColor: 'red'}}>
              <Text>Hi</Text>
            </View>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                }}
                onPress={this.createTwoButtonAlert}>
                <Ionicons
                  color={Color.Red}
                  size={25}
                  name={'md-power'}
                  style={{elevation: 5, marginRight: 10}}
                />
                <Text style={styles.logout}>Logout</Text>
              </TouchableOpacity>
            </View>
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
            <TouchableOpacity
              onPress={() => this.onClickListener('attendance')}>
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
            <TouchableOpacity>
              <Ionicons color="white" size={50} name={'md-person'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  darkText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.Maroon,
  },
  lightText: {
    fontSize: 14,
    color: Color.Grey,
  },
  logout: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.Red,
    elevation: 5,
  },
});
