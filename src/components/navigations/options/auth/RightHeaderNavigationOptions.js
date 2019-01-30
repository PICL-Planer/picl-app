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

    header: null,
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
        textAlign: 'center',
        //
    },
    headerTintColor: 'red',
    headerRight:
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('')}
            >
                <Text style={{ marginRight: 20 }}>????</Text>
            </TouchableOpacity>
        </View>,
})