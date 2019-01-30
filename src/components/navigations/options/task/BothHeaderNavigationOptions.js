import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { MaterialIcons, Foundation } from '@expo/vector-icons';
import { colors } from '@util/Colors';

export const BothHeaderNavigationOptions = ({ navigation }) => ({
    headerBackTitle: null,
    headerStyle: {
        backgroundColor: colors.baseColor,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        elevation: 0,
        //
    },
    headerTitleStyle: {
        flex: 1,
        color: colors.noticeText,
        textAlign: 'center',   //
    },
    headerTintColor: 'red',
    
    title: "TASK",
    headerLeft: () => {
        const { routeName } = navigation.state;     // 알람 개수를 파라미터로 받아와야 할 듯
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.navigate('') }}
            >
                <View style={styles.iconWrap}>
                    <MaterialIcons name={'access-alarm'} size={30} color={'white'} />
                </View>
            </TouchableOpacity>
        )
    },
    headerRight: 
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('')}
            >
                <View style={styles.iconWrap}>
                    <Foundation name={'page-add'} size={30} color={'white'} />
                </View>
            </TouchableOpacity>,
})


const styles = StyleSheet.create({
    iconWrap: {
        padding: 5,
    },
    txt: {
        color: colors.noticeText,
        fontSize: 15,
        marginHorizontal: 10,
    },
    txtSub: {
        color: 'red',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: -5,
    },
});