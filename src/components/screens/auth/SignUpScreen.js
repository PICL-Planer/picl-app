import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";

// import {
//     RkButton,
//     RkText,
//   } from 'react-native-ui-kitten';

import { colors } from '@util/Colors';

import Button from '@shared/Button';
import TextInput from '@shared/TextInput';
import StatusBar from '@shared/StatusBar';

class SignUpScreen extends Component {
    static navigationOptions = {
        title: 'Sign Up'
    }
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            email: '',
            confirmPassword: '',
            isRegistering: false
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
                        <TextInput
                            style={styles.inputBox}
                            txtLabel={('Account')}
                            txtHint={('Account')}
                            txt={this.state.account}
                            onTextChanged={(text) => this.onTextChanged('Account', text)}
                        />
                        <TextInput
                            style={styles.inputBox}
                            txtLabel={('Email')}
                            txtHint={('Email')}
                            txt={this.state.email}
                            onTextChanged={(text) => this.onTextChanged('Email', text)}
                        />
                        <TextInput
                            style={styles.inputBox}
                            txtLabel={('Password')}
                            txtHint={('Password')}
                            txt={this.state.password}
                            onTextChanged={(text) => this.onTextChanged('Password', text)}
                            isPassword={true}
                        />
                        <TextInput
                            style={styles.inputBox}
                            txtLabel={('Confirm Password')}
                            txtHint={('Confirm Password')}
                            txt={this.state.confirmPassword}
                            onTextChanged={(text) => this.onTextChanged('ConfirmPassword', text)}
                            isPassword={true}
                        />
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
        paddingVertical: 40,
    },
    wrapper: {
        width: '80%',
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