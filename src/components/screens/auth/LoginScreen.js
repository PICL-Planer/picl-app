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
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
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
//import NativeButton from 'apsl-react-native-button';

const getByteLengthStr = (str) => {
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
            isLogin: false,
            account: '',
            password: ''
        }
    }

    static navigationOptions = {
        title: 'KeyboardAvoidingView',
      };
    
      state = {
        input: '',
        byteLength: 0,
      };
    
      onTextChanged = (text) => {
        const byteLength = getByteLengthStr(text);
        if (byteLength > 300) {
          return;
        }
        this.setState({
          input: text.replace(/(\r\n|\n|\r)/gm, ''),
          byteLength,
        });
      }

    render() {
        return (
            <View>
                <KeyboardAvoidingView
                    style={styles.content}
                    behavior='padding'
                    enabled
                    keyboardVerticalOffset={64}
                >
                    <ImageBackground style={styles.imgBackground}
                        source={getAssetByFilename("login")}
                        resizeMethod='resize' // IOS에서는 기본적으로 resizing을 해주지만 Android에서는 그렇지 않다고 함
                    >
                    </ImageBackground>
                    <ScrollView style={{ alignSelf: 'stretch' }}>
                        <TextInput
                            style={[
                                styles.txtInput,
                                {
                                  fontSize: this.state.input ? 18 : 14,
                                },
                              ]}
                              underlineColorAndroid='transparent' // android fix
                              autoCapitalize='none'
                              autoCorrect={false}
                              multiline={true}
                              placeholderTextColor='rgb(155,155,155)'
                              onChangeText={(text) => this.onTextChanged(text)}
                              placeholder={ 'Hi! I am a placeholder!! '}
                              value={this.state.input}
                        >
                            <Text>ttt</Text>
                        </TextInput>
                    </ScrollView>
                    {/* <NativeButton
                        onPress={() => Alert.alert('Pressed')}
                        isDisabled={!this.state.input}
                        activeOpacity={0.75}
                        style={styles.btnNext}
                        textStyle={
                            this.state.input
                                ? styles.txtNext
                                : styles.txtNextDisabled
                        }
                        disabledStyle={styles.btnNextDisabled}
                    >Next</NativeButton> */}
                </KeyboardAvoidingView>
            </View>
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

    content: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
      },
      txtInput: {
        alignSelf: 'stretch', // android fix
        margin: 20,
        minHeight: 88,
        padding: 12,
        fontSize: 14,
      },
      byteTxt: {
        alignSelf: 'flex-end',
        color: '#696969',
        marginRight: 24,
      },
      btnNext: {
        marginBottom: 0,
        height: 56,
        backgroundColor: colors.dodgerBlue,
        borderWidth: 0,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
      },
      container: {
        flex: 1,
        backgroundColor: colors.fefefe,
      },
      txtNext: {
        fontSize: 14,
        color: 'white',
      },
      btnNextDisabled: {
        backgroundColor: 'rgb(243,243,243)',
      },
      txtNextDisabled: {
        fontSize: 14,
        opacity: 0.4,
        color: 'black',
      },
}));