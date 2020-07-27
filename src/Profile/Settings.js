import React, {Component} from 'react';
import {View, Text, BackHandler} from 'react-native';

export default class Settings extends Component {
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
    this.props.navigation.navigate('ProfileScreen');
    return true;
  }

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}
