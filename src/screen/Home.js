import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Mainservice from '../service/Mainservice';
import Main from './Main'
import Loading from '../components/Loading.js'


export default class App extends Component {

    constructor(props) {
        super();
        this.state = {
            loaded: false
        }
        Mainservice.loadOptions(v => this.setState({ loaded: true }));
    }

    static navigationOptions = () => ({
        headerLeft: <Image style={{ width: 50, height: '90%', padding: 10 }}
            source={require('../drawable/ic_loading_logo.png')} />,
        title: 'TKTV 알리미'
    })

    render() {
        return (
            <View style={styles.container}>
                {this.state.loaded ? <Main navigation={this.props.navigation} /> : <Loading />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});