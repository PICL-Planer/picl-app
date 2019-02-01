import React from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import { colors } from '@util/Colors';

export const RightHeaderNavigationOptions = ({ navigation }) => ({
    //headerBackTitle: null, // ???? 

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
        textAlign: 'center',
        //
    },
    // 뒤로가기 버튼 색
    headerTintColor: colors.noticeText,
    // 아래처럼 해야 가운데 정렬이 딱된다... 
    headerRight:
        <View>           
        </View>,
})