import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import ListDetailTouchable from '../components/ListDetailTouchable'
import DivisionView from '../components/DivisionView'
import AsyncStorage from '@react-native-community/async-storage';

export default class ListDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            list: [],
            DeleList: []
        }
    }
    componentDidMount = () => {
        this._doOpenApi();
    }
    _doOpenApi = () => {
        this.setState({ list: this.props.navigation.getParam('onFocusListDetail', 'onFocusListDetail').$ });
    }
    _pressCall = () => {
        if(this.state.list.No != null)
        {
        const url = `tel:${JSON.stringify(this.props.navigation.getParam('Phonenumber', 'phonenum'))}}`;
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
        }
    }

    _pressSms = () => {
        if(this.state.list.No != null)
        {
        const url = `sms:${JSON.stringify(this.props.navigation.getParam('Phonenumber', 'phonenum'))}}`;
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
        }
    }
    _pressDel = async () => {
        if(this.state.list.No != null)
        {
            try {
                await AsyncStorage.getItem('DelList').then(
                    req => JSON.parse(req))
                    .then(Json => {
                        console.log(Json)
                        if (Json !== null) {                        
                            console.log(this.state.list.No)
                            this.setState({
                                DeleList: Json.concat(this.state.list.No)
                            })
                            AsyncStorage.setItem('DelList', JSON.stringify(this.state.DeleList));
                            this.props.navigation.replace('AlimList');
                        }
                        else {
                            console.log('else')
                            console.log(this.state.list.No)
                            this.setState({
                                DeleList: [this.state.list.No]
                            })
                            AsyncStorage.setItem('DelList', JSON.stringify(this.state.DeleList));
                            this.props.navigation.replace('AlimList');
                        }
                    })
            } catch (e) {
                console.log('error _pressDel')
                console.log(e)
            }
        }
       
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
                    <ListDetailTouchable onPress={() => this._pressSms} source={require('../drawable/customer-reviews.png')} />
                    <ListDetailTouchable onPress={() => this._pressDel()} source={require('../drawable/delete.png')} />
                </View>
                <DivisionView navigation={this.props.navigation}
                    onFocusListDetail={this.props.navigation.getParam('onFocusListDetail', 'onFocusListDetail').$} />
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