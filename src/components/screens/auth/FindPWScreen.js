import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";

import { InputItem, List, DatePicker, Radio,  } from 'antd-mobile-rn';

import { colors } from '@util/Colors';

import Button from '@shared/Button';
import TextInput from '@shared/TextInput';
import StatusBar from '@shared/StatusBar';
import enUS from './en_US'

const now = new Date();
const Item = List.Item;

class FindPWScreen extends Component {
    static navigationOptions = {
        title: '패스워드 찾기'
    }
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            account: '',        
            birthday: undefined,
            sex: 0,
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
                    </List>
                    
                    <View style={styles.btnWrapper}>
                        <Button
                            isLoading={this.state.isLoading}
                            onPress={this.onRegister}
                            style={styles.btnRegister}
                            textStyle={styles.txtRegister}
                        >{('찾기')}</Button>
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
        }
    }

    onFindPassword = () => {
        this.setState({
            isLoading: true
        }, async () => {
            try {
                // 일단 미 구현
                // 유효성 체크가 필요.... 
                // 1. ID, Password, RePassword 모두 값이 들어가 있어야 함 
                await validationInput();
                // 2. 개인정보에 대한 내용이 필요 함 
                await validationPerson();
                // 위에서 문제가 없다면 로그인 API 호출 
                //await firebase.auth().sendPasswordResetEmail(this.state.email);

            } catch (error) {
                this.setState({ isRegistering: false });
                Alert.alert(getString('ERROR'), err.message);
            }
        })
    }
}
export default FindPWScreen;

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