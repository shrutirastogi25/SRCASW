import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

export default class ResetPassword extends Component {
  state = {
    otp: 0,
  };

  constructor(props) {
    super(props);
  }

  onClickListener = viewId => {
    if (viewId === 'newPass') {
      this.props.navigation.dispatch(StackActions.replace('NewPassword'));
    } else if (viewId === 'signIn') {
      this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
    } else if (viewId === 'emailOtp') {
      this.props.navigation.dispatch(StackActions.replace('EmailOtp'));
  }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>OTP sent to Phone Number: </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Enter OTP"
            keyboardType="numeric"
            onChangeText={otp => this.setState({otp})}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('newPass')}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('signIn')}>
          <Text style={styles.loginText}>Back to Login Screen</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.onClickListener('emailOtp')}>
          <Text>OTP generation using Email Address?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#800000',
  },
  loginText: {
    color: 'white',
  },
  textStyle: {
    marginBottom: 20,
  },
});
