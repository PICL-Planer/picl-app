import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';
import { Ionicons } from '@expo/vector-icons';

export const RightHeaderNavigationOptions = ({ navigation }) => ({
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

    title: '일정추가',
    headerTintColor: 'white',
    headerRight:
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { console.log(navigation.state.routeName) }}
        >
            <View style={styles.iconWrap}>
                    <Ionicons name={'md-create'} size={35} color={'white'} />
            </View>
        </TouchableOpacity>,
})

const styles = StyleSheet.create({
    iconWrap: {
        padding: 5,
    },
    txt: {
        color: 'white',
        fontSize: 15,
        marginHorizontal: 10,
    },
});