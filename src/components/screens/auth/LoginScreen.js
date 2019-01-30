import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Keyboard,
    AsyncStorage,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
} from "react-native";

import CustomButton from '@shared/Button';
import CustomTextInput from '@shared/TextInput';
import { statusBarHeight } from '@util/Styles';
import { getAssetByFilename } from '@util/Images'
import { colors } from '@util/Colors';

const _getByteLengthStr = (str) => {
    const m = encodeURIComponent(str).match(/%[89ABab]/g);
    return str.length + (m ? m.length : 0);
};

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            isLogin: false, 
            isLoggingIn: false
        }
    }   

    render() {
        return (
            // <KeyboardAvoidingView
            //     style={styles.screen}
            //     behavior='padding'
            //     enabled
            //     keyboardVerticalOffset={64}
            //     //onResponderRelease={() => Keyboard.dismiss()}
            // >
                <ImageBackground style={styles.imgBackground}
                    source={getAssetByFilename("login")}
                    resizeMethod='resize' // IOS에서는 기본적으로 resizing을 해주지만 Android에서는 그렇지 않다고 함
                >
                    <ScrollView style={{}}>
                        <View style={{ flexDirection: 'column', alignItems: 'center',}}>
                            <View style={{ marginTop: 100, width: '80%' }}>
                                <CustomTextInput                     
                                    txtHint={'이메일 주소 입력'}
                                    txtLabel={'ID'}
                                    txt={this.state.id}                                
                                    onTextChanged={ (text) => this.onTextChanged('ID', text)}
                                />
                                <CustomTextInput 
                                    style={{ marginTop: 10 }}
                                    txtHint={'비밀번호 입력(숫자, 문자조합 8자리 이상)'}
                                    txtLabel={'PASSWORD'}
                                    txt={this.state.password}
                                    onTextChanged={ (text) => this.onTextChanged('PASSWORD', text)}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity
                                underlayColor='red'
                                onPress={this.onFindPW}
                            >
                                <Text style={{ fontSize: 20 }}>비밀번호 찾기</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>|</Text>
                            <TouchableOpacity
                                underlayColor='red'
                                onPress={this.onSignUp}
                            >
                                <Text style={{ fontSize: 20 }}>서비스 가입</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center',}}>
                            <View style={{ width: '80%'}}>
                            <CustomButton                    
                                id='login'
                                constainerStyle={{ flex: 1 }}
                                isLoading={this.state.isLoggingIn}
                                onPress={() => this.onLogin()}
                                style={styles.btnLogin}
                                textStyle={styles.txtLogin}    
                            >{'로그인'}</CustomButton>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Image
                                style={{width: 350, height: 150 }}
                                source={getAssetByFilename("social-button")}
                                resizeMethod='resize' 
                            />
                        </View>
                        <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', }}>                            
                            <Text style={{ fontSize: 15}}>Copyright(c)2019 PICL All rights reserved.</Text>
                        </View>                        
                    </ScrollView>
                </ImageBackground>
            //</KeyboardAvoidingView>
        );
    }

    onTextChanged = (type, text) => {
        const byteLength = _getByteLengthStr(text);
        if (byteLength > 100) {
            Alert.alert("100글자 이상은 입력 불가합니다")
            return;
        }

        text.replace(/(\r\n|\n|\r)/gm, '');

        switch (type) {
            case 'ID':
                this.setState({ id: text });
                return;
            case 'PASSWORD':
                this.setState({ password: text });
                return;
        }
    }

    onSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }

    onFindPW = () => {
        this.props.navigation.navigate('FindPW');
    }

    onLogin = () => {
        this.setState({
            isLogin: true,
            isLoggingIn: true,
        }, async () => {
            // 원래는 네트워크 통신으로 인증을 해야 한다.. 임시방편 
            //const userData = auth(this.state.email, this.state.pw);
            //console.log(userData);

            // 원래는 아래와 같은 방법으로 해야 함
            // let formData = new FormData();
            // formData.append('account', this.state.account);
            // formData.append('password', this.state.password);

            // fetch(GOBAL.HOST + 'mobile/login', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then((response) => response.json())
            // .then((responseJson) => {
            //     this.onLoginResult(responseJson);
            // })
            // .catch((error) => {
            //     console.log(error);
            // });

            var ret = { success: true, token: 'success' }
            //this.onLoginResult(ret);

            this.props.navigation.navigate('Loading', { isLogin: true });
        })
    }

    onLoginResult = (result) => {
        //console.log(result);
        if (!result.success) {
            alert('로그인정보를 확인해라');
            return;
        }
        // 세션 토큰을 사용하면 앱을 계속 로그인 하고 할 수 있다 

        try {
            AsyncStorage.setItem('@Session:token', result.token);
        } catch (error) {
            alert('로그인에 실패했습니다')
        }

        // this.props.navigation.dispatch({
        //     type: 'Navigation/RESET',
        //     index: 0,
        //     actions: [{ routeName: 'List'}]
        // })
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: statusBarHeight,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
    },

    btnLogin: {
        backgroundColor: colors.baseColor,
        borderColor: colors.baseColor,
        borderRadius: 4,
        borderWidth: 1,
        height: 60,
        shadowColor: colors.baseColor,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,
    
        alignItems: 'center',
        justifyContent: 'center',
      },
      txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
});