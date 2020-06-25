import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';

class EmailOtp extends Component {
    state = {
        eOtp: ''
    }

    constructor(props) {
        super(props);
    }

    onClickListener = viewId => {
        if (viewId === 'newPass') {
          this.props.navigation.dispatch(StackActions.replace('NewPassword'));
        } else if (viewId === 'signIn') {
          this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
        } else if (viewId === 'restore_password') {
            this.props.navigation.dispatch(StackActions.replace('ResetPassword'));
        }
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>OTP sent to Email Address: </Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                      style={styles.inputs}
                      placeholder="Enter OTP"
                      keyboardType="email-address"
                      onChangeText={eOtp => this.setState({eOtp})}
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
                  onPress={() => this.onClickListener('restore_password')}>
                    <Text>OTP generation using Phone Number?</Text>
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
    

export default EmailOtp;