
import React, {Component} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';


export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.moveToNextScreen();
    }, 4000);
  }
  moveToNextScreen = () => {
    this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#800000',
        }}>
        <StatusBar
          backgroundColor='red'
          barStyle="dark-content"
        />
        <Image
          style={{}}
          source={require('../Assets/logo.png')}
          resizeMode="contain"
        />
      </View>
    );
  }
}
