import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import ListDetailTouchable from '../components/ListDetailTouchable'
import DivisionView from '../components/DivisionView'
import axios from 'axios'


export default class ListDetail extends Component {
    constructor(props) {
        super();

        this.state = {
            Phonenumber: ' '
        }
    }


    _pressCall = () => {
        const url = `tel:${JSON.stringify(this.props.navigation.getParam('Phonenumber', 'phonenum'))}}`;
        console.log(url)
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }
    _pressSms = () => {
        const url = `sms:${JSON.stringify(this.props.navigation.getParam('Phonenumber', 'phonenum'))}}`;
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }
    _pressDel = () => {
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
                <DivisionView navigation={this.props.navigation}
                    index={JSON.stringify(this.props.navigation.getParam('itemId', 'ID'))}
                    Phonenumber={this.state.Phonenumber}
                    numChanger={() => this.numChanger()} />
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