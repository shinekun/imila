import React, { Component } from 'react';
import { StyleSheet,Image, TouchableOpacity } from 'react-native';

export default class ListDetailTouchable extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.touchablestyle}
                onPress={this.props.onPress}>
                <Image style={{ height: 30, width: 30 }} 
                source={this.props.source} />
            </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    touchablestyle:{ 
        alignItems: 'flex-start', 
        height: '100%', 
        flex: 1,
        justifyContent: 'center', 
        marginHorizontal: 5 
    }
});