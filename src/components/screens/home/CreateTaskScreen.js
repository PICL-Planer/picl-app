import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';
import { InputItem, List, DatePickerView, Radio, WhiteSpace, Modal, Tabs } from 'antd-mobile-rn';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList } from 'react-native-calendars';
import enUS from 'rmc-date-picker/lib/locale/en_US'

const datetimeToString = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  }

class CreateTaskScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskName: '',
            visibleDatePicker: false,
            allDay: 0,
            alarmType: 0,
            visibleDate: false,
            checkWeek: true,
        }
    }
    render() {
        const footerButtons = [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') }
          ]
        
        return (
            <View style={styles.container}> 
                <View style={{ backgroundColor:colors.baseColor , height: 60,  alignItems: 'flex-start', justifyContent:'center'  }}>
                        <InputItem 
                            clear
                            value={this.state.taskName}
                            onChange={(value) => this.setState({ taskName: value })}
                            placeholder='일정을 입력하세요'                    
                        />                    
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => console.log("aa")}
                        activeOpacity={1}
                    >
                        <View style={{ marginHorizontal: 10 , flexDirection: 'row', height: 50, alignItems: 'center', justifyContent:'space-between', borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                            <Text>태스크 선택</Text>
                            <Ionicons name={'ios-arrow-forward'} size={35} color={colors.baseColor} />
                        </View>
                    </TouchableOpacity>
                    {this.state.allDay !== 2 ?
                    <View style={{ marginHorizontal: 10 , height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1,  }}>
                        <View styel={{flexDirection: 'column', }}>
                            <TouchableOpacity
                                onPress={this.showModal}
                            >  
                                <Text>2019년 02월 18일 (월)</Text>
                                <View style={{ marginTop: 10}}>             
                                    <Text style={{textAlign: 'center'}}>12:00</Text>
                                </View>
                            </TouchableOpacity>  
                                                   
                        </View>
                        <Text>>></Text>
                        <View style={{ flexDirection: 'column'}}>
                            <TouchableOpacity
                                onPress={this.showModal}
                            >  
                                <Text>2019년 02월 18일 (월)</Text>
                                <View style={{ marginTop: 10}}>
                                    <Text style={{textAlign: 'center'}}>12:00</Text>
                                </View>
                            </TouchableOpacity>           
                        </View>           
                    </View>
                    : 
                    <View style={{ marginHorizontal: 10 , height: 70, alignItems: 'center', justifyContent: 'center', borderBottomColor: 'grey', borderBottomWidth: 1,  }}>
                        <View styel={{flexDirection: 'column', }}>
                            <TouchableOpacity
                                onPress={this.showModal}
                            >  
                                <Text>2019년 02월 18일 (월)</Text>
                                <View style={{ marginTop: 10}}>             
                                    <Text style={{textAlign: 'center'}}>12:00</Text>
                                </View>
                            </TouchableOpacity>                                                  
                        </View>
                    </View>
                    }
                <Modal style={{width : 330, height: 300}} transparent onClose={this.onClose} maskClosable visible={this.state.visibleDatePicker} footer={footerButtons}>
                                <DatePickerView
                                    locale={enUS}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                    onValueChange={this.onValueChange}
                                />
                </Modal>  
                </View>
                <View style={{height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                    <Radio checked={this.state.allDay === 1} 
                           onChange={(event) => {
                                if (event.target.checked) {
                                    this.setState({ allDay: 1 })
                                }
                            }} 
                            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}>
                        <View>
                            <Text>1시간</Text>
                        </View>
                    </Radio>
                    <WhiteSpace />
                    <Radio checked={this.state.allDay === 2} 
                           onChange={(event) => {
                                if (event.target.checked) {
                                    this.setState({ allDay: 2 })
                                }
                            }} 
                            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }} >
                        <View>
                            <Text>1일</Text>
                        </View>
                    </Radio> 
                </View>    
                <View>
                    <TouchableOpacity onPress={this.showDate }>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, height: 50, alignItems: 'center', justifyContent:'space-between', borderBottomColor: 'grey', borderBottomWidth: 1,}}>
                            <Text>반복주기</Text>
                            <Ionicons name={'ios-arrow-forward'} size={35} color={colors.baseColor} />
                        </View>
                    </TouchableOpacity>
                    <Modal style={{ width: 330, height: 400 }} transparent onClose={this.onCloseDate} maskClosable visible={this.state.visibleDate} footer={footerButtons} >
                        <View style={{ flexDirection: 'row', height: 30, justifyContent: 'space-around' }}>
                            <View style={{ width: '50%', height: '100%', borderRightColor: 'grey', borderRightWidth: 1,}}>
                                <TouchableOpacity onPress={() => { this.setState({ checkWeek: true })} }>                                    
                                        <Text style={{textAlign: 'center'}}>매주</Text>  
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%', height: '100%', }}>
                                <TouchableOpacity onPress={() => { this.setState({ checkWeek: false })} }>    
                                        <Text style={{textAlign: 'center'}}>매월</Text>  
                                </TouchableOpacity>
                            </View>
                        </View>
                        { this.state.checkWeek === true ? (
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                <Text>월</Text>
                                <Text>화</Text>
                                <Text>수</Text>
                                <Text>목</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                <Text>금</Text>
                                <Text>토</Text>
                                <Text>일</Text>
                                <Text>매일</Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: 10}}>
                                <Text>반복종료일을 설정</Text>
                                <Text>2019년 05월 18일 까지 반복</Text>
                            </View>
                        </View>
                        )
                        :          
                        (             
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                <Text>금</Text>
                                <Text>토</Text>
                                <Text>일</Text>
                                <Text>매일</Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: 10}}>
                                <Text>반복종료일을 설정</Text>
                                <Text>2019년 05월 18일 까지 반복</Text>
                            </View>
                        </View>
                        )
                        }
                    </Modal>
                    
                    <View style={{marginHorizontal: 10, height: 50, alignItems: 'flex-start', justifyContent:'center', borderBottomColor: 'grey', borderBottomWidth: 1,}}>
                        <InputItem 
                            clear
                            value={this.state.taskName}
                            onChange={(value) => this.setState({ taskName: value })}
                            placeholder='장소'                    
                        />       
                    </View>
                    <View style={{marginHorizontal: 10, height: 50, alignItems: 'flex-start', justifyContent:'center', borderBottomColor: 'grey', borderBottomWidth: 1,}}>
                        <InputItem 
                            clear
                            value={this.state.taskName}
                            onChange={(value) => this.setState({ taskName: value })}
                            placeholder='메모'                    
                        />       
                    </View>
                    
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10, height: 50, alignItems: 'center', justifyContent:'space-between', borderBottomColor: 'grey', borderBottomWidth: 1,}}>
                                <Text>참여자</Text>
                                <Ionicons name={'ios-arrow-forward'} size={35} color={colors.baseColor} />
                            </View>
                        </TouchableOpacity>
                                      
                </View>
                <View>
                    <View style={{marginHorizontal: 10, alignItems: 'flex-start', justifyContent:'center', marginTop: 10}}>
                        <Text>미리알림</Text>
                    </View>
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>    
                        <Radio checked={this.state.alarmType === 1} 
                           onChange={(event) => {
                                if (event.target.checked) {
                                    this.setState({ alarmType: 1 })
                                }
                            }} 
                            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}>
                            <View>
                                <Text>10분</Text>
                            </View>
                        </Radio>
                        <WhiteSpace />
                        <Radio checked={this.state.alarmType === 2} 
                           onChange={(event) => {
                                if (event.target.checked) {
                                    this.setState({ alarmType: 2 })
                                }
                            }} 
                            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }} >
                            <View>
                                <Text>1시간</Text>
                            </View>
                        </Radio> 
                        <WhiteSpace />
                        <Radio checked={this.state.alarmType === 3} 
                           onChange={(event) => {
                                if (event.target.checked) {
                                    this.setState({ alarmType: 3 })
                                }
                            }} 
                            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }} >
                            <View>
                                <Text>1일</Text>
                            </View>
                        </Radio> 
                        <WhiteSpace />
                        <Radio checked={this.state.alarmType === 4} 
                           onChange={(event) => {
                                if (event.target.checked) {
                                    this.setState({ alarmType: 4 })
                                }
                            }} 
                            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }} >
                            <View>
                                <Text>없음</Text>
                            </View>
                        </Radio> 
                    </View>                    
                </View>
            </View>
        );
    }

    showModal = () => this.setState({ visibleDatePicker: true })
    onClose = () => this.setState({ visibleDatePicker: false })

    showDate = () => this.setState({ visibleDate: true })
    onCloseDate = () => this.setState({ visibleDate: false })


}
export default CreateTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});