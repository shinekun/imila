import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import AlimFlatList from '../components/AlimFlatList'
import axios from 'axios'

export default class AlimList extends Component {
    constructor(props) {
        super();

        this.state = {
            list: []
        }
    }
    componentDidMount = () => {
        this._doOpenApi();
    }

    _doLogout = () => {
        AsyncStorage.setItem("ISLOGIN", JSON.stringify(false));
        this.props.navigation.replace('Login');
    }
    _doOpenApi = () => {
        if (this.state.loading) return;
        var parseString = require('react-native-xml2js').parseString;
        axios.get(`http://itktv.cafe24.com/alimi/manager/`)
            .then(data => {
                var temp;
                parseString(data.data, function (err, result) {
                    temp = Object.values(result.VALUE.LIST[0].rsv);
                })
                this.setState({ list: temp });
            })
            .catch(function (error) {
                console.log("Error");
                console.log(error);
            });
    }

    render() {
        const { list } = this.state;
        return (
            <View style={styles.container}>
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
                                    name={ele.$.Name} rdate={ele.$.RDate} subdate={ele.$.SubDate} phonenumber={ele.$.RPhone}/>
                            })
                            : <Text style={{ alignItems: 'center' }}>LOADING...</Text>}
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