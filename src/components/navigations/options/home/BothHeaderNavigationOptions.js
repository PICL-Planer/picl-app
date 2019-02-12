import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Modal, Button   } from 'antd-mobile-rn'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@util/Colors';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const datetimeToString = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  }


export default class HeaderButton extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          visible: false,
        }
      }

    showModal = () => this.setState({ visible: true })
    onClose = () => this.setState({ visible: false })
    
    render () {

        const footerButtons = [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') }
          ]

        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={this.showModal}>
                    <Text style={{color: 'white', fontSize: 20,}}>{datetimeToString()}</Text>
                </TouchableOpacity>
                <Modal style={{width : 330, height: 400}} transparent onClose={this.onClose} maskClosable visible={this.state.visible} footer={footerButtons}>
                    <CalendarList
                        current={datetimeToString()}
                        monthFormat={'yyyy MM'}
                        pastScrollRange={24}
                        futureScrollRange={24}
                        // Enable horizontal scrolling, default = false
                        horizontal={true}
                        // Enable paging on horizontal, default = false
                        pagingEnabled={true}
                        // Set custom calendarWidth.
                        calendarWidth={320}
                        style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                    />
                </Modal>
            </View>
        );
    }
    
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
    
    headerTitle: <HeaderButton navigation={navigation}/>,
    //title: ,
    headerLeft: () => {
        const { routeName } = navigation.state;     // 알람 개수를 파라미터로 받아와야 할 듯
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.navigate('') }}
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
                onPress={() => navigation.navigate('Add')}
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