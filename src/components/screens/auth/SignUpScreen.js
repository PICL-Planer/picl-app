import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";

import { InputItem, List, DatePicker } from 'antd-mobile-rn';

import { colors } from '@util/Colors';

import Button from '@shared/Button';
import TextInput from '@shared/TextInput';
import StatusBar from '@shared/StatusBar';
import enUS from './en_US'

const now = new Date()

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

            isRegistering: false,

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
                                onChange={(value) => this.setState({ value })}                                
                                placeholder='이메일 주소 입력'
                            >
                                <Text style={{ fontSize: 10, color: 'black'}}>ID</Text>
                            </InputItem>
                            <InputItem
                                clear
                                onErrorPress={() => alert('clicked me')}
                                value={this.state.password}
                                onChange={(value) => this.setState({ value })}                                
                                placeholder='비밀번호 입력'
                            >
                                <Text style={{ fontSize: 10, color: 'black'}}>PASSWORD</Text>
                            </InputItem>
                            <InputItem
                                clear
                                onErrorPress={() => alert('clicked me')}
                                value={this.state.rePassword}
                                onChange={(value) => this.setState({ value })}                                
                                placeholder='비밀번호를 한번 더 입력하세요'
                            >
                                <Text style={{ fontSize: 10, color: 'black'}}>RE-PASSWORD</Text>
                            </InputItem>
                        </List>
                        <List renderHeader={() => '추가 항목'}>
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
                                    <Text style={{ color: 'black'}}>생년월일</Text>
                                </List.Item>
                            </DatePicker>
                        </List>


                        
                        <View style={styles.btnWrapper}>
                            <Button
                                isLoading={this.state.isRegistering}
                                onPress={this.onRegister}
                                style={styles.btnRegister}
                                textStyle={styles.txtRegister}
                            >{('REGISTER')}</Button>
                            <View style={styles.textRow}>
                                {/* <RkText rkType='primary3' style={{marginRight: 5,}}>Already have an account?</RkText>
                                <RkButton rkType='clear' onPress={this.onLoginBack}>
                                    <RkText rkType='header6'>Sign in now</RkText>
                                </RkButton> */}
                            </View>
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
            case 'Email':
                this.setState({ email: text });
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

            } catch (error) {
                this.setState({ isRegistering: false });
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
        flex: 1,
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        alignSelf: 'stretch',
    },
    scrollViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        width: '100%',
        flexDirection: 'column',
    },
    btnWrapper: {
        marginTop: 10,
        //width: '100%',
        //justifyContent: "space-around",
        alignItems: 'center',
    },
    inputBox: {
        marginTop: 10,
    },
    btnRegister: {
        backgroundColor: colors.dusk,
        borderColor: colors.dusk,
        shadowColor: colors.dusk,

        borderRadius: 10 ,
        borderWidth: 1 ,
        width: 150,
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
        marginTop: 20,
        flexDirection: 'row',
        
    },
});