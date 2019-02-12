import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert
} from "react-native";

import { InputItem, List, DatePicker, Radio, WhiteSpace, Checkbox,  } from 'antd-mobile-rn';

import { colors } from '@util/Colors';

import Button from '@shared/Button';
import TextInput from '@shared/TextInput';
import StatusBar from '@shared/StatusBar';
import enUS from './en_US'

const now = new Date();
const Item = List.Item;

class SignUpScreen extends Component {
    static navigationOptions = {
        title: '서비스 가입'
    }
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            rePassword: '',
            birthday: undefined,
            sex: 0,
            isRegistering: false,
            agree: false,

        }
    }
    render() {
        return (
            <KeyboardAvoidingView 
                style={styles.container}
                keyboardVerticalOffset={120}
                behavior="padding"              // or position, height
                enabled    
            >
                <StatusBar isDarkConten={false} />
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContainer}  // 정렬용
                >
                    <View style={styles.wrapper}>
                        <List renderHeader={() => '계정'}>
                            <InputItem
                                clear                                
                                onErrorPress={() => alert('clicked me')}
                                value={this.state.account}
                                onChange={(value) => this.onTextChanged('Account', value )}                                
                                placeholder='이메일 주소 입력'
                            >
                                <Text style={{ fontSize: 10, color: 'black'}}>ID</Text>
                            </InputItem>
                            <InputItem
                                clear
                                onErrorPress={() => alert('clicked me')}
                                value={this.state.password}
                                onChange={(value) => this.onTextChanged('Password', value )}                                
                                placeholder='비밀번호 입력'
                            >
                                <Text style={{ fontSize: 10, color: 'black'}}>PASSWORD</Text>
                            </InputItem>
                            <InputItem
                                clear
                                onErrorPress={() => alert('clicked me')}
                                value={this.state.rePassword}
                                onChange={(value) => this.onTextChanged('ConfirmPassword', value )}                                
                                placeholder='비밀번호를 한번 더 입력하세요'
                            >
                                <Text style={{ fontSize: 10, color: 'black'}}>RE-PASSWORD</Text>
                            </InputItem>
                        </List>
                        <List renderHeader={() => '개인 정보'}>
                            <DatePicker
                                defaultDate={now}
                                value={this.state.birthday}
                                mode='date'
                                minDate={this.date1MinDate || (this.date1MinDate = new Date(1980, 1, 1))}
                                maxDate={this.date1MaxDate || (this.date1MaxDate = now)}
                                onChange={this.onDateChange}
                                format='YYYY-MM-DD'
                                locale={enUS}
                            >
                                <List.Item arrow='horizontal'>
                                    <Text style={{ color: 'black' }}>생년월일</Text>
                                </List.Item>
                            </DatePicker>
                            
                            <Item wrap>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ color: 'black', marginTop: 5, }}>성별</Text>

                                    <View style={{ flexDirection: "row", justifyContent: 'flex-end'}}>
                                        <Radio checked={this.state.sex === 1}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    this.setState({ sex: 1 })
                                                }
                                            }}
                                            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}>
                                            남자
                                        </Radio>
                                            <Radio checked={this.state.sex === 2}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        this.setState({ sex: 2 })
                                                    }
                                                }}
                                                style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}>
                                                여자
                                        </Radio>
                                    </View>
                                </View>
                            </Item>      
                            <Item wrap>
                                <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                                    <Checkbox checked={this.state.agree} style={{ tintColor: '#f00' }} 
                                        onChange={(event) => { this.setState({ agree: event.target.checked }) }} />
                                    <Text style={{ marginLeft: 10, } }>서비스 이용약관 및 개인정보보고 정책에 동의 합니다.</Text>
                                </View>  
                            </Item>
                        </List>
                        
                        <View style={styles.btnWrapper}>
                            <Button
                                isLoading={this.state.isRegistering}
                                onPress={this.onRegister}
                                style={styles.btnRegister}
                                textStyle={styles.txtRegister}
                            >{('등록')}</Button>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center', marginTop: 10, }}>
                            <Text style={{ }}>이미 계정이 있나요?</Text>
                            <TouchableOpacity onPress={this.onLoginBack}>
                                <Text style={{ color: 'green', marginLeft: 10, }}>{("로그인하러 가기")}</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    onDateChange = birthday => this.setState({ birthday })

    onTextChanged = (type, text) => {
        switch (type) {
            case 'Account':
                this.setState({ account: text });
                return;
            case 'Password':
                this.setState({ password: text });
                return;
            case 'ConfirmPassword':
                this.setState({ confirmPassword: text });
                return;
        }
    }

    onRegister = () => {
        this.setState({
            isRegistering: true
        }, async () => {
            try {
                // 일단 미 구현
                // 유효성 체크가 필요.... 
                // 1. ID, Password, RePassword 모두 값이 들어가 있어야 함 
                await validationInput();
                // 2. 개인정보에 대한 내용이 필요 함 
                await validationPerson();
                // 3. 정책에 동의하는 것이 필요 함 
                await validationAgreement();
                // 위에서 문제가 없다면 로그인 API 호출 
                //const userData = await firebase.auth().createUserWithEmailAndPassword(this.state.account, this.state.password);
                // 추가 모델링이 필요하다면
                // userData.user.updateProfile({
                //     displayName: this.state.displayName,
                //     photoURL: '',
                // });

                // firestore를 사용한다면 추가 정보를 업데이트 해주자
                //firebase.firestore().collection('users').doc(`${userData.user.uid}`).set({
                    //displayName: this.state.displayName,
                    //email: this.state.email,
                    //photoURL: '',
                    //statusMsg: this.state.statusMsg,
                //});

            } catch (error) {
                this.setState({ isRegistering: false });
                Alert.alert(getString('ERROR'), err.message);
            }
        })
    }

    onLoginBack = () => {
        this.props.navigation.navigate("Login");
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: 'white',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    scrollView: {
        alignSelf: 'stretch',
    },
    scrollViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
    },
    btnWrapper: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: 'center',
    },
    inputBox: {

    },
    btnRegister: {
        backgroundColor: colors.baseColor,
        borderColor: colors.baseColor,
        shadowColor: colors.baseColor,

        borderRadius: 10 ,
        borderWidth: 1 ,
        width: 300,
        height: 60 ,

        shadowOffset: {
            width: 0,
            height: 10 ,
        },
        shadowRadius: 4 ,
        shadowOpacity: 0.3,

        justifyContent: 'center',
        alignItems: 'center',
    },
    txtRegister: {
        fontSize: 16 ,
        fontWeight: 'bold',
        color: 'white',
    },
    textRow: {
  
    },
});