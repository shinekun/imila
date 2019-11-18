import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class AlimFlatList extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <TouchableOpacity style={{ flex: 1, borderBottomColor: '#ddd', borderBottomWidth: 2 }}
                onPress={() => { this.props.navigation.navigate('ListDetail', { itemId: this.props.index,Phonenumber:this.props.phonenumber }) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.numtxtstyle}>{this.props.no}</Text>
                    <View style={{ width: '70%' }}>
                        <Text style={{ fontSize: 30, }}>{this.props.name}</Text>
                        <Text style={{ color: '#989898' }}>예약일자: {this.props.rdate}</Text>
                    </View>
                    <View style={styles.reservationviewstyle}>
                        <Text >{this.props.subdate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    numtxtstyle: {
        justifyContent: 'flex-start',
        fontSize: 20,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    reservationviewstyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%'
    }
});