import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class TeacherSignup extends Component {
  constructor(props) {
    super(props);
  }

  onClickListener = viewId => {
    if (viewId === 'login') {
      this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              underlineColorAndroid="transparent"
              placeholderTextColor="#FFFFFF"
              onChangeText={id => this.setState({id})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              placeholderTextColor="#FFFFFF"
              onChangeText={password => this.setState({password})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              keyboardType="default"
              underlineColorAndroid="transparent"
              placeholderTextColor="#FFFFFF"
              onChangeText={name => this.setState({name})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              placeholderTextColor="#FFFFFF"
              onChangeText={email => this.setState({email})}
            />
          </View>

          <TouchableHighlight
            style={styles.SignupButton}
            onPress={() => this.onClickListener('login')}>
            <Text style={styles.SignupText}>Signup</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  inputContainer: {
    borderRadius: 25,
    width: 350,
    backgroundColor: '#A64C4C',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 30,
  },

  input: {
    marginTop: 10,
    fontSize: 17,
    color: '#FFFFFF',
  },

  SignupButton: {
    backgroundColor: '#800000',
    height: 50,
    width: 350,
    borderRadius: 25,
    marginVertical: 15,
    justifyContent: 'center',
  },

  SignupText: {
    color: '#FFFFFF',
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
