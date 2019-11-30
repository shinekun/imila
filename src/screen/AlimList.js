import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AlimFlatList from '../components/AlimFlatList';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationEvents } from 'react-navigation';

export default class AlimList extends Component {
    constructor(props) {
        super();

        this.state = {
            list: [],
            DelList: [],
            loading: false,
        }
    }
    componentDidMount = () => {
        this.getData();
        this._doOpenApi();
    }

    _doLogout = () => {
        AsyncStorage.clear()
        this.props.navigation.replace('Login');
    }
    _doOpenApi = () => {
        var parseString = require('react-native-xml2js').parseString;
        axios.get(`http://itktv.cafe24.com/alimi/manager/`)
            .then(data => {
                let temp = [];
                parseString(data.data, (err, result) => {
                    temp = Object.values(result.VALUE.LIST[0].rsv).filter(item => !this.state.DelList.includes(item.$.No))
                })
                this.setState({ list: temp });
            })
            .catch((error) => {
                console.log("AlimList,_doOpenApi_Error");
                console.log(error);
            });
    }
    getData = async () => {
        try {
            var DeleList;
            if (await AsyncStorage.getItem('DelList') != null) {
                await AsyncStorage.getItem('DelList').then(
                    req => { DeleList = JSON.parse(req); }
                )
                this.setState({
                    DelList: DeleList,
                    loading: !this.state.loading
                })
            }
        } catch (e) {
            console.log('AlimList.js--getData_Error!!')
            console.log(e)
        }

    };

    render() {
        const { list, DelList } = this.state;
        return (
            <View style={styles.container}>
                <NavigationEvents onDidFocus={() => this.getData()} />
                <View style={styles.viewstyle}>
                    <Text style={styles.txtstyle}>TKTV-인터넷신문/방송</Text>
                    <TouchableOpacity style={styles.touchablestyle} onPress={() => this._doLogout()}>
                        <Image style={{ height: 50, width: 50 }} source={require('../drawable/unlocked.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ backgroundColor: '#ddd' }}>알림 리스트</Text>
                    <ScrollView>
                        {list.length > 0 ?
                            list.map((ele, index) => {
                                return <AlimFlatList key={index} index={index} navigation={this.props.navigation} no={ele.$.No}
                                    name={ele.$.Name} rdate={ele.$.RDate} subdate={ele.$.SubDate} phonenumber={ele.$.RPhone} onFocusListDetail={ele}/>
                            }) : <Text style={{ alignItems: 'center' }}>LOADING...</Text>}
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    viewstyle: {
        backgroundColor: '#A6A6A6',
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    txtstyle: {
        flex: 6,
        justifyContent: 'center',
        fontSize: 20,
        margin: 15
    },
    touchablestyle: {
        alignItems: 'flex-end',
        height: '100%',
        flex: 1,
        justifyContent: 'center'
    },
});