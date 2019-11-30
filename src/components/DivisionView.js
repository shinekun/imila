import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default class DivisionView extends Component {
    constructor(props) {
        super();

        this.state = {
            list: {}
        }
    }

    componentDidMount = () => {
        this._doOpenApi();
    }
    _doOpenApi = () => {
        this.setState({ list: this.props.onFocusListDetail });
    }

    render() {
        const {list} = this.state;
        return (
            <ScrollView>
                {
                    <ScrollView style={{ flexDirection: 'column', width: '100%' }}>
                        <View style={styles.oddviewstyle}>
                            <Text style={styles.division}>번호</Text>
                            <Text style={{ fontSize: 25 }}>{list.No}</Text>
                        </View>
                        <View style={styles.evenviewstyle}>
                            <Text style={styles.division}>구분</Text>
                            <Text style={{ fontSize: 25 }}>{list.rdiv}</Text>
                        </View>
                        <View style={styles.oddviewstyle}>
                            <Text style={styles.division}>이름</Text>
                            <Text style={{ fontSize: 25 }}>{list.Name}</Text>
                        </View>
                        <View style={styles.evenviewstyle}>
                            <Text style={styles.division}>연락처</Text>
                            <Text style={{ fontSize: 25 }}>{list.RPhone}</Text>
                        </View>
                        <View style={styles.oddviewstyle}>
                            <Text style={styles.division}>이메일</Text>
                            <Text style={{ fontSize: 25 }}>{list.email}</Text>
                        </View>
                        <View style={styles.evenviewstyle}>
                            <Text style={styles.division}>지역</Text>
                            <Text style={{ fontSize: 25 }}>{list.rloc}</Text>
                        </View>
                        <View style={styles.oddviewstyle}>
                            <Text style={styles.division}>소속</Text>
                            <Text style={{ fontSize: 25 }}>{list.rjob}</Text>
                        </View>
                        <View style={styles.evenviewstyle}>
                            <Text style={styles.division}>클래스선택</Text>
                            <Text style={{ fontSize: 25 }}>{list.rclass}</Text>
                        </View>
                        <View style={styles.oddviewstyle}>
                            <Text style={styles.division}>예약일시</Text>
                            <Text style={{ fontSize: 25 }}>{list.RSubDate}</Text>
                        </View>
                        <View style={styles.evenviewstyle}>
                            <Text style={styles.division}>등록일시</Text>
                            <Text style={{ fontSize: 25 }}>{list.SubDate}</Text>
                        </View>
                    </ScrollView> 
                    }
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    division: {
        fontSize: 20,
        color: 'orange',
        marginBottom: 5
    },
    oddviewstyle: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#D5D5D5',
        marginVertical: 5
    },
    evenviewstyel: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#fafafa',
        marginVertical: 5
    }
});