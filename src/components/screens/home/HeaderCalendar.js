import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Modal, Button   } from 'antd-mobile-rn'

const datetimeToString = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  }


export default class HeaderButton extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
          visible: false,
          today: props.today,
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
                        current={this.state.today}
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