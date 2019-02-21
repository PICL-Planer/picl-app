import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    ScrollView
} from "react-native";

import { colors } from '@util/Colors';
import { InputItem, List, DatePickerView, Radio, WhiteSpace, Modal, Tabs, Checkbox, Popover } from 'antd-mobile-rn';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList } from 'react-native-calendars';
import enUS from 'rmc-date-picker/lib/locale/en_US'

const Item = Popover.Item

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
            monday : false,
            tuseday : false,
            wednesday : false,
            thursday : false,
            friday : false,
            saturday : false,
            sunday : false,
            selected: '',
            month : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],    
            visibleTaskType: false        
        }
    }
    render() {
        const footerButtons = [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') }
          ]

        let overlay = [1,2,3,4].map((i, index) => (<Item key={index} value={`option ${i}`}><Text>{i}번 째</Text></Item>))
        
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
                        onPress={() => (this.setState({ visibleTaskType: true }))}
                        activeOpacity={1}
                    >
                        <View style={{ marginHorizontal: 10 , flexDirection: 'row', height: 50, alignItems: 'center', justifyContent:'space-between', borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                            {/* <View style={{paddingHorizontal: 5,paddingVertical: 10}}>
                                    <Popover
                                        ref='mc'
                                        name='m'
                                        style={{ backgroundColor: '#eee' }}
                                        overlay={overlay}
                                        //contextStyle={{margin: 50}}
                                        overlayStyle={{left: 90, marginTop: 20}}
                                        triggerStyle={{flexDirection: 'row', paddingHorizontal: 10}} 
                                        onSelect={this.onSelect}
                                    > */}
                                        <Text>태스크 선택</Text>
                                    {/* </Popover>
                            </View> */}
                            <Ionicons name={'ios-arrow-forward'} size={35} color={colors.baseColor} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => (this.setState({ visibleTaskType: true }))}
                        activeOpacity={1}
                    >
                        <View style={{ marginHorizontal: 10 , flexDirection: 'row', height: 50, alignItems: 'center', justifyContent:'space-between', borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                            {/* <View style={{paddingHorizontal: 5,paddingVertical: 10}}>
                                    <Popover
                                        ref='mc'
                                        name='m'
                                        style={{ backgroundColor: '#eee' }}
                                        overlay={overlay}
                                        //contextStyle={{margin: 50}}
                                        overlayStyle={{left: 90, marginTop: 20}}
                                        triggerStyle={{flexDirection: 'row', paddingHorizontal: 10}} 
                                        onSelect={this.onSelect}
                                    > */}
                                        <Text>그룹 타입</Text>
                                    {/* </Popover>
                            </View> */}
                            <Ionicons name={'ios-arrow-forward'} size={35} color={colors.baseColor} />
                        </View>
                    </TouchableOpacity>
                    <Modal style={{width : 330, height: 300}} transparent onClose={this.onClose} maskClosable visible={this.state.visibleTaskType} footer={footerButtons}>
                            <View style={{flexDirection: 'column', alignItems: 'center',}}>
                                <Text>Work</Text>
                                <Text>Personal</Text>
                                <Text>Social</Text>
                            </View>
                    </Modal>
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
                        <View style={{ flexDirection: 'row', height: 30, justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
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
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                                <Checkbox checked={this.state.monday} style={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ monday: event.target.checked }) }}>월</Checkbox>
                                <Checkbox checked={this.state.tuseday} style={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ tuseday: event.target.checked }) }}>화</Checkbox>
                                <Checkbox checked={this.state.wednesday} style={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ wednesday: event.target.checked }) }}>수</Checkbox>
                                <Checkbox checked={this.state.thursday} style={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ thursday: event.target.checked }) }}>목</Checkbox>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                <Checkbox checked={this.state.friday} style={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ friday: event.target.checked }) }}>금</Checkbox>
                                <Checkbox checked={this.state.saturday} style={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ saturday: event.target.checked }) }}>토</Checkbox>
                                <Checkbox checked={this.state.sunday} style={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ sunday: event.target.checked }) }}>일</Checkbox>
                                <Checkbox checked={this.state.week} style={{ tintColor: '#f00' }} onChange={(event) => this.onChangeWeek(event)}>매일</Checkbox>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: 40}}>
                                <TouchableOpacity
                                    onPress={this.showModal}
                                >
                                    <View style={{marginBottom: 20}}>
                                        <Text>반복종료일</Text>    
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ textAlign: 'center'}}>2019년 05월 18일 까지 반복</Text>
                            </View>
                        </View>
                        )
                        :          
                        ( 
                        <View>
                            <View style={{ flexDirection: 'column',}}>
                                <TouchableOpacity 
                                    onPress={this.showCalendar}
                                >
                                    <View>
                                        <Text>매월 {this.state.choosedDay}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{flexDirection: 'row',paddingHorizontal: 5,paddingVertical: 10}}>
                                    <Popover
                                        ref='mc'
                                        name='m'
                                        style={{ backgroundColor: '#eee' }}
                                        overlay={overlay}
                                        contextStyle={{margin: 50}}
                                        overlayStyle={{left: 90, marginTop: 20}}
                                        triggerStyle={{flexDirection: 'row', paddingHorizontal: 10}} onSelect={this.onSelect}
                                    >
                                        <Text style={{width: 100}}>매월 3번째</Text>
                                    </Popover>
                                    <Popover
                                        ref='mc'
                                        name='m'
                                        style={{ backgroundColor: '#eee' }}
                                        overlay={overlay}
                                        contextStyle={{margin: 50}}
                                        overlayStyle={{left: 90, marginTop: 20}}
                                        triggerStyle={{flexDirection: 'row', paddingHorizontal: 10}} onSelect={this.onSelect}
                                    >
                                        <Text style={{ marginLeft: 5, width:100}}>화요일</Text>
                                    </Popover>  
                                </View>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: 40}}>
                                <TouchableOpacity
                                    onPress={this.showModal}
                                >
                                    <View style={{marginBottom: 20}}>
                                        <Text>반복종료일</Text>    
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ textAlign: 'center'}}>2019년 05월 18일 까지 반복</Text>
                            </View>    
                        </View>
                        )}
                    </Modal>
                    <Modal style={{ width: 330, height: 400 }} transparent onClose={this.onCloseCalendar} visible={this.state.visibleCalendar} >
                        <ScrollView>
                            {
                                this.state.month.map( (i, index) => (
                            
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => { this.setState({ visibleCalendar: false})}}
                                        >
                                            <View>
                                                <Text >{i}일</Text>
                                            </View>
                                        </TouchableOpacity>
                                        )
                                    ) 
                            }
                        </ScrollView>
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

    showCalendar = () => this.setState({ visibleCalendar: true})
    onCloseCalendar = () => this.setState({ visibleCalendar: false})

    onChangeWeek = (event) => { 
        if (event.target.checked === true) {
            this.setState({
                monday : true,
                tuseday : true,
                wednesday : true,
                thursday : true,
                friday : true,
                saturday : true,
                sunday : true,
            });
        } else {
            this.setState({
                monday : false,
                tuseday : false,
                wednesday : false,
                thursday : false,
                friday : false,
                saturday : false,
                sunday : false,
            });
        }    
    }

    onSelect = value => this.setState({ selected: value })

    
}
export default CreateTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});