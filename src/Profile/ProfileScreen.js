import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  onClickListener = viewId => {
    if (viewId === 'home') {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    }
  };
  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <Ionicons size={20} name={'md-arrow-round-back'} />
        <TouchableOpacity onPress={() => this.onClickListener('home')}>
          <Text>Go back to home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
