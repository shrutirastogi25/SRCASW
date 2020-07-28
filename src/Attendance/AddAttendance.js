/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  BackHandler,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../Utils/Color';

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
    let year = [
      {
        value: 'First',
      },
      {
        value: 'Second',
      },
      {
        value: 'Third',
      },
    ];
    let subject = [
      {
        value: 'C++',
      },
      {
        value: 'Java Programming',
      },
      {
        value: 'Discrete Mathematics',
      },
      {
        value: 'Operating Systems',
      },
      {
        value: 'Computer Networks',
      },
      {
        value: 'Data Structures',
      },
      {
        value: 'Android Programming',
      },
      {
        value: 'PHP',
      },
      {
        value: 'Database Management System',
      },
      {
        value: 'Software Engineering',
      },
      {
        value: 'Algorithms',
      },
    ];
    let teacher = [
      {
        value: 'Suruchi Chawla',
      },
      {
        value: 'Deepali Bajaj',
      },
      {
        value: 'Urmil Bharti',
      },
      {
        value: 'Asha Yadab',
      },
      {
        value: 'Seema',
      },
    ];
    let month = [
      {value: 'Jan'},
      {value: 'Feb'},
      {value: 'March'},
      {value: 'April'},
      {value: 'May'},
      {value: 'June'},
    ];
    return (
      <View>
        <View style={{marginH: 10}}>
          <Dropdown label="Year" data={year} />
        </View>
        <View style={{margin: 10}}>
          <Dropdown label="Subject" data={subject} />
        </View>
        <View style={{margin: 10}}>
          <Dropdown label="Teacher" data={teacher} />
        </View>
        <View style={{margin: 10}}>
          <Dropdown label="Month" data={month} />
        </View>
        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <Text style={styles.text}>Add image or document</Text>
          <TouchableOpacity style={{marginLeft: 10, alignSelf: 'flex-end'}}>
            <Ionicons color={Color.Maroon} size={20} name={'md-attach'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.LightGrey,
  },
});
