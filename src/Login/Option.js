/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Color from '../Utils/Color';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Option extends Component {
  constructor(props) {
    super(props);
  }
  onClickListener = viewId => {
    if (viewId === 'student') {
      this.props.navigation.dispatch(StackActions.replace('StudentSignup'));
    } else if (viewId === 'teacher') {
      this.props.navigation.dispatch(StackActions.replace('TeacherSignup'));
    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textOut}>I am a</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#800000',
            margin: 50,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 20,
          }}>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => this.onClickListener('teacher')}>
            <Text style={styles.textMajor}>Teacher</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#800000',
            margin: 50,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 20,
          }}>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => this.onClickListener('student')}>
            <Text style={styles.textMajor}>Student</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    color: Color.Maroon,
    flex: 1,
  },
  textMajor: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  textOut: {
    fontSize: 40,
    color: Color.Maroon,
    fontWeight: 'bold',
    marginTop: 15,
    elevation: 30,
  },
});
