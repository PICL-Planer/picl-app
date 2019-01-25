import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Keyboard,
    AsyncStorage
} from "react-native";

// import {
//     RkButton,
//     RkText,
//     RkTextInput,
//     RkAvoidKeyboard,
//     RkTheme,
//     RkStyleSheet,
// } from 'react-native-ui-kitten';

import { statusBarHeight } from '@util/Styles';
import { getAssetByFilename } from '@util/Images'

//import { GradientButton } from '@kittenDesign';
//import { FontAwesome } from '@kittenDesign/icons';

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            account: '',
            password: ''
        }
    }
    render() {
        return (
            <View><Text>ttt</Text></View>
            // <RkAvoidKeyboard
            //     style={styles.screen}
            //     onStartShouldSetResponder={() => true}
            //     onResponderRelease={() => Keyboard.dismiss()}
            // >
            //     <ImageBackground style={styles.imgBackground}
            //         source={getAssetByFilename("login")}
            //         resizeMethod='resize' // IOS에서는 기본적으로 resizing을 해주지만 Android에서는 그렇지 않다고 함
            //     >
            //         <View style={styles.header}>
            //             <RkText rkType='logo h0 primary'>Lost Ark</RkText>
            //             <RkText rkType='light h1 primary'>Companion</RkText>
            //         </View>
            //         <View style={styles.content}>
            //             <View>
            //                 <RkTextInput
            //                     rkType='rounded'
            //                     placeholder='Username'
            //                     value={this.state.account}
            //                     onChangeText={(text) => this.onTextChanged('Account', text)}
            //                 />
            //                 <RkTextInput
            //                     rkType='rounded'
            //                     placeholder='Password'
            //                     secureTextEntry
            //                     value={this.state.password}
            //                     onChangeText={(text) => this.onTextChanged('Password', text)}
            //                 />
            //                 <View style={styles.btnWrap}>
            //                     <GradientButton
            //                         style={styles.btn}
            //                         rkType='large'
            //                         text='LOGIN'
            //                         onPress={this.onLogin}
            //                     />
            //                     <GradientButton
            //                         style={styles.btn}
            //                         rkType='large'
            //                         text='SIGN UP'
            //                         onPress={this.onSignUp}
            //                     />
            //                 </View>
            //             </View>
            //             <View style={styles.btnSocialWrap}>
            //                 <RkButton style={styles.btnSocial} rkType='social'>
            //                     <RkText rkType='awesome hero'>{FontAwesome.twitter}</RkText>
            //                 </RkButton>
            //                 <RkButton style={styles.btnSocial} rkType='social'>
            //                     <RkText rkType='awesome hero'>{FontAwesome.google}</RkText>
            //                 </RkButton>
            //                 <RkButton style={styles.btnSocial} rkType='social'>
            //                     <RkText rkType='awesome hero'>{FontAwesome.facebook}</RkText>
            //                 </RkButton>
            //             </View>
            //             <View style={styles.footer}>
            //                 <View style={styles.textRow}>
            //                     <RkText rkType='primary3' style={styles.baseFont}>Do you forgot your account?</RkText>
            //                     <RkButton rkType='clear' onPress={this.onFindPW}>
            //                         <RkText rkType='header6' style={styles.baseFont}>Find my password</RkText>
            //                     </RkButton>
            //                 </View>
            //             </View>
            //             <View style={styles.logoWrap}>
            //                 <Image style={styles.logo} source={getAssetByFilename("stoveLogo")} />
            //                 <Image style={styles.logo} source={getAssetByFilename("rpgLogo")} />
            //             </View>
            //         </View>
            //     </ImageBackground>
            // </RkAvoidKeyboard>
        );
    }

    onTextChanged = (type, text) => {
        switch (type) {
            case 'Account':
                this.setState({ account: text });
                return;
            case 'Password':
                this.setState({ password: text });
                return;
        }
    }
    onSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }

    onLogin = () => {
        this.setState({
            isLogin: true
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
            this.onLoginResult(ret);

            this.props.navigation.navigate('Loading', { isLogin: true });
        })
    }

    onLoginResult = (result) => {
        //console.log(result);
        if(!result.success) {
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

    onFindPW = () => {
        this.props.navigation.navigate('FindPW');
    }




}
export default LoginScreen;

const styles = StyleSheet.create(theme => ({
    screen: {
        //padding: scaleVertical(16),
        flex: 1,
        paddingTop: statusBarHeight,
        justifyContent: 'space-between',
        //backgroundColor: theme.colors.screen.base,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
    },
    header: {
        marginTop: 50,
        left: 20
    },
    content: {
        top: 80,
        margin: 20,
    },
    btnWrap: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    btn: {
        marginVertical: 20,
        width: 150,
        marginLeft: 10,
        marginRight: 10,
    },
    btnSocialWrap: {
        flexDirection: 'row',
        //marginBottom: scaleVertical(24),
        marginHorizontal: 24,
        justifyContent: 'space-around',
    },
    btnSocial: {
        //borderColor: theme.colors.border.solid,
    },
    baseFont: {
        color: 'white'
    },
    footer: {

    },
    textRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoWrap: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: "space-around"
    },
    logo: {
        marginLeft: -80,
        marginRight: -80,
        width: 70,
        height: 60
    },
}));