import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';

export const RightHeaderNavigationOptions = ({ navigation }) => ({
    headerBackTitle: null,
    headerStyle: {
        backgroundColor: colors.blueyGray,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        elevation: 0,
        //
    },
    headerTitleStyle: {
        flex: 1,
        color: 'white',
        textAlign: 'center',   //
    },

    title: navigation.state.routeName,
    headerTintColor: 'white',
    headerRight:
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { console.log(navigation.state.routeName) }}
        >
            <Text style={styles.txt}>??</Text>
        </TouchableOpacity>
    ,
})

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 15,
        marginHorizontal: 10,
    },
});