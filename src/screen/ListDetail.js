import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import ListDetailTouchable from '../components/ListDetailTouchable'
import DivisionView from '../components/DivisionView'
import axios from 'axios'


export default class ListDetail extends Component {
    constructor(props) {
        super();
    }

    _pressCall = () => {
        const url = `tel:01012345678`;
        console.log(url)
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }
    _pressSms = () => {
        const url = 'sms:789456123';
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }
    _pressDel = () => {
    }
    _doOpenApi = () => {
        var parseString = require('react-native-xml2js').parseString;
        axios.get(`http://itktv.cafe24.com/alimi/manager/`).then(
            data => {
                parseString(data.data, function (err, result) {
                    const tempdata = Object.values(result.VALUE.LIST[0].rsv)
                    const tempdataitem = Object.values(result.VALUE.NODE[0].item)
                    console.log(tempdata);
                })
            }
        );
    }
    render() {
        return (
            <View>
                <View style={{ backgroundColor: '#A6A6A6', height: 60, justifyContent: 'center', flexDirection: 'row', }}>
                    <TouchableOpacity
                        style={{ alignItems: 'flex-start', height: '100%', flex: 1, justifyContent: 'center', marginHorizontal: 5 }}
                        onPress={() => this.props.navigation.goBack()}>
                        <Image style={{ height: 30, width: 30 }} source={require('../drawable/left-arrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.toptxtstyle}>TKTV-인터넷신문/방송</Text>
                    <ListDetailTouchable onPress={this._pressCall}
                        source={require('../drawable/phone-call.png')} />
                    <ListDetailTouchable onPress={this._pressSms} source={require('../drawable/customer-reviews.png')} />
                    <ListDetailTouchable onPress={this._doOpenApi} source={require('../drawable/delete.png')} />
                </View>
                <DivisionView />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        margin: 10
    },
    toptxtstyle: {
        flex: 6,
        justifyContent: 'center',
        fontSize: 20,
        margin: 15
    },

});