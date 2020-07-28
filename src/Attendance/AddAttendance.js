import React, {Component} from 'react';
import {Text, View, BackHandler} from 'react-native';

export default class AddAttendance extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  handleBackButtonClick() {
    this.props.navigation.navigate('AttendanceTeacher');
    return true;
  }
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
