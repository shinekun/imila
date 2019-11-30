import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';


export default class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.checkLoginStatus();
  }
  checkLoginStatus = async () => {
    try {
      if (await AsyncStorage.getItem('LoginId') != null) {
        var valueId = await AsyncStorage.getItem('LoginId')
        var valuePw = await AsyncStorage.getItem('LoginPw')
        valueId = valueId.replace(/"/g, "");
        valuePw = valuePw.replace(/"/g, "");
        if (valueId !== null) {
          axios.get(`http://tktv.co.kr/api/shop/?id=${valueId}&password=${valuePw}`)
            .then(data => {
              if (data.data.response === "SUCCESS") {
                this.props.navigation.replace('AlimList');
                console.log('로그인 성공');
              }
              else {
                this.props.navigation.replace('Login');
                console.log('로그인 실패');
              }
            }
            );
        }
      }
      else { this.props.navigation.replace('Login') };
    } catch (e) {
      console.log('Main.js--getData_Error!!')
      console.log(e)
    }
  };
  render() {
    return (
      <View>
      </View>
    );
  }
}