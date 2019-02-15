import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@util/Colors';

import HeaderButton from '@screen/home/HeaderCalendar';

const datetimeToString = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
}

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
    
    headerTitle: <HeaderButton navigation={navigation} today={datetimeToString()}/>,
    //title: ,
    headerLeft: () => {
        const { routeName } = navigation.state;     // 알람 개수를 파라미터로 받아와야 할 듯
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.state.params.onPressLeftHeader() }
            >
                <View style={styles.iconWrap}>
                    <MaterialIcons name={'today'} size={35} color={'white'} />
                </View>
            </TouchableOpacity>
        )
    },
    headerRight: 
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('CreateTask')}
            >
                <View style={styles.iconWrap}>
                    <MaterialCommunityIcons name={'calendar-edit'} size={35} color={'white'} />
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