import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

class NewPassword extends Component {
  state = {
    passwordOne: '',
    passwordTwo: '',
  };

  onClickListener = viewId => {
    if (viewId === 'login') {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="New Password"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={passwordOne => this.setState({passwordOne})}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={passwordTwo => this.setState({passwordTwo})}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Done</Text>
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
});

export default NewPassword;
