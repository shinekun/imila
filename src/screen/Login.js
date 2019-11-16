import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage,KeyboardAvoidingView } from 'react-native';
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super();

        this.state = {
            user_id: '',
            user_pw: '',
        }

    }
    //로그인 정보 기억하기
    //xml 을 json으로

    _doLogin = () => {
        if (this.state.user_id != '' || this.state.user_pw != '') {
            axios.get(`http://tktv.co.kr/api/shop/?id=${this.state.user_id}&password=${this.state.user_pw}`)
                .then(data => {
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

    render() {
        return (
           
 <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View>
                    <Text style={styles.welcometext}>{`Welcom Back,`}</Text>
                    <Text style={styles.welcometext2}>Sign in to continue</Text>
                </View>
                <View style={styles.txtinputviewstyle}>
                    <Text style={styles.idandpasswordtxt}>ID</Text>
                    <TextInput placeholder={'ID'}
                        style={styles.txtinputstyle}
                        onChangeText={(id) => this.setState({ user_id: id })} />
                    <Text style={styles.idandpasswordtxt}>Password</Text>
                    <TextInput placeholder={'PW'}
                        style={styles.txtinputstyle}
                        secureTextEntry={true}
                        onChangeText={(pw) => this.setState({ user_pw: pw })} />
                </View>
                <View style={styles.btnviewstyle}>
                    <TouchableOpacity
                        style={styles.btnstyle}
                        onPress={() => this._doLogin()}
                    >
                        <Text style={{ fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>

                </View>
                </KeyboardAvoidingView>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcometext: {
        fontSize: 50
    },
    welcometext2: {
        fontSize: 20,
        color: 'gray'
    },
    txtinputviewstyle: {
        marginTop: 80,
        width: '80%'
    },
    idandpasswordtxt: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    },
    txtinputstyle: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    },
    btnviewstyle: {
        width: '70%',
        marginTop: 70
    },
    btnstyle: {
        backgroundColor: '#949494',
        width: '100%',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    }
});