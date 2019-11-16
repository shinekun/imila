import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 250, height: 250 }}
         source={require('../drawable/ic_loading_logo.png')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});