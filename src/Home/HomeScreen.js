/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  onClickListener = viewId => {
    if (viewId === 'login') {
      this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
    } else if (viewId === 'profile') {
      this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
    }
  };
  render() {
    return (
      <View style={{flex: 10}}>
        <View style={{flex: 9}}>
          <Text>HomeScreen</Text>
          <TouchableOpacity onPress={() => this.onClickListener('login')}>
            <Text>Go back to LoginScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onClickListener('profile')}>
            <Text>Go to ProfileScreen</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
