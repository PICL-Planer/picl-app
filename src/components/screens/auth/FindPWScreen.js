import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { colors } from '@util/Colors';

import Button from '@shared/Button';
import TextInput from '@shared/TextInput';

class FindPWScreen extends Component {
    static navigationOptions = {
        title: 'Find Password'
    }
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContainer}
                >
                    <View style={styles.wrapper}>
                        <TextInput
                            style={styles.inputBox}
                            txtLabel={('Email')}
                            txtHint={('Email')}
                            txt={this.state.email}
                            onTextChanged={(text) => this.onTextChanged('Email', text)}
                            //isPassword={true}
                        />
                        <View style={styles.btnWrapper}>
                            <Button
                                isLoading={this.state.isLoading}
                                onPress={this.onFindPassword}
                                style={styles.btnRegister}
                                textStyle={styles.txtRegister}
                            >{('Send')}</Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    onTextChanged = (type, text) => {
        switch (type) {
            case 'Email':
                this.setState({ email: text });
                return;
        }
    }

    onFindPassword = () => {
        this.setState({
            isLoading: true
        }, async () => {
            try {
                // 일단 미 구현
            } catch (error) {
                this.setState({ isLoading: false })
            }
        })
    }
}
export default FindPWScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        //justifyContent: 'center'
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
        alignItems: 'center',
    },
    inputBox: {
        marginTop: 10,
    },
    btnWrapper: {
        width: '100%',
        alignItems: 'flex-end',
    },
    btnRegister: {
        backgroundColor: colors.dusk,
        borderColor: colors.dusk,
        borderRadius: 4,
        borderWidth: 1,
        width: 136,
        height: 60,
        marginLeft: 4,
        marginTop: 24,
        marginBottom: 48,
        shadowColor: colors.dusk,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,

        alignItems: 'center',
        justifyContent: 'center',
    },
    txtRegister: {
        fontSize: 16 ,
        fontWeight: 'bold',
        color: 'white',
    },
});