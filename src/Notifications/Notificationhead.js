/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../Utils/Color';

export default class NotificationHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  getList = () => {
    const li = [
      {key: '1'},
      {key: '2'},
      {key: '3'},
      {key: '4'},
      {key: '5'},
      {key: '6'},
      {key: '7'},
      {key: '8'},
      {key: '9'},
      {key: '10'},
      {key: '11'},
      {key: '12'},
      {key: '13'},
      {key: '14'},
      {key: '15'},
      {key: '16'},
    ];
    this.setState({
      list: li,
    });
  };

  componentDidMount() {
    this.getList();
  }
  onClickListener = viewId => {
    if (viewId === 'profile') {
      this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
    } else if (viewId === 'home') {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    } else if (viewId === 'attendance') {
      this.props.navigation.dispatch(StackActions.replace('Notification'));
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 9}}>
          <ScrollView>
            <FlatList
              scrollEnabled={true}
              style={{flex: 1}}
              data={this.state.list}
              renderItem={({item}) => (
                <View style={{backgroundColor: Color.LightMaroon}}>
                  <TouchableOpacity style={styles.container}>
                    <Text style={styles.darkText}>{item.key}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: Color.Maroon,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              borderRightColor: 'white',
              borderRightWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => this.onClickListener('home')}>
              <Ionicons color="white" size={50} name={'md-home'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              borderRightColor: 'white',
              borderRightWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.onClickListener('attendance')}>
              <Ionicons color="white" size={50} name={'md-calendar'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              borderRightColor: 'white',
              borderRightWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Ionicons color="white" size={50} name={'md-notifications'} />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.onClickListener('profile')}>
              <Ionicons color="white" size={50} name={'md-person'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  darkText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.Maroon,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 60,
    height: 100,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
});
