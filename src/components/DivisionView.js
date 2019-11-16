import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import axios from 'axios'

var DATA;
export default class DivisionView extends Component {
    constructor(props) {
        super();
    }

    _doLogin = () => {
        if (this.state.user_id != '' || this.state.user_pw != '') {
            axios.get(`http://tktv.co.kr/api/shop/?id=${this.state.user_id}&password=${this.state.user_pw}`)
                .then(data => {
                    console.log(data);
                    if (data.data.response == "SUCCESS") {
                        AsyncStorage.setItem("ISLOGIN", JSON.stringify(true));
                        this.props.navigation.replace('AlimList');
                    }
                    else
                        alert('로그인에 실패하였습니다')
                });
        }
        else
            alert('아이디와 비밀번호를 입력해주세요')
    }

    _doOpenApi = () => {
        var parseString = require('react-native-xml2js').parseString;
        axios.get(`http://itktv.cafe24.com/alimi/manager/`).then(
            data => {
                parseString(data.data, function (err, result) {
                    const tempdata = Object.values(result.VALUE.LIST[0].rsv)
                    const tempdataitem = Object.values(result.VALUE.NODE[0].item)
                    
                })
            }
        );
    }

    render() {
        return (
            //플랫리스트
            <ScrollView style={{ flexDirection: 'column', width: '100%' }}>
                <Text>asdfasdf</Text>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={styles.oddviewstyle}>
                            <Text style={styles.division}>asdf</Text>
                            <Text style={{ fontSize: 25 }}>erv</Text>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
                {/* <View style={styles.oddviewstyle}>
                    <Text style={styles.division}>번호</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.No}</Text>
                </View>
                <View style={styles.evenviewstyle}>
                    <Text style={styles.division}>구분</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.rdiv}</Text>
                </View>
                <View style={styles.oddviewstyle}>
                    <Text style={styles.division}>이름</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.Name}</Text>
                </View>
                <View style={styles.evenviewstyle}>
                    <Text style={styles.division}>연락처</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.Rphone}</Text>
                </View>
                <View style={styles.oddviewstyle}>
                    <Text style={styles.division}>이메일</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.email}</Text>
                </View>
                <View style={styles.evenviewstyle}>
                    <Text style={styles.division}>지역</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.rloc}</Text>
                </View>
                <View style={styles.oddviewstyle}>
                    <Text style={styles.division}>소속</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.rjob}</Text>
                </View>
                <View style={styles.evenviewstyle}>
                    <Text style={styles.division}>클래스선택</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.rclass}</Text>
                </View>
                <View style={styles.oddviewstyle}>
                    <Text style={styles.division}>예약일시</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.RSubDate}</Text>
                </View>
                <View style={styles.evenviewstyle}>
                    <Text style={styles.division}>등록일시</Text>
                    <Text style={{ fontSize: 25 }}>{DATA[0].$.SubDate}</Text>
                </View> */}
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