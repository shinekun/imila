import React, { Component } from 'react';
import { View,AsyncStorage } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
      this.checkLoginStatus();
  }

  checkLoginStatus = async () => { 
    try {
      const value = await AsyncStorage.getItem('ISLOGIN')
      if (value !== null) {
        this.setState({ _islogin: value });
        this.props.navigation.replace(value==='true'?'AlimList':'Login');
      }
      else{
        this.props.navigation.replace('Login');
      }
    } catch (e) {
      alert('error');
    }
  };
  render() {
    return (
      <View>
      </View>
    );
  }
}