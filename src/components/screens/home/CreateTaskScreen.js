import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';
import { InputItem, List, DatePicker, Radio, WhiteSpace, Checkbox,  } from 'antd-mobile-rn';

class CreateTaskScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskName: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor:colors.baseColor , height: 60,  alignItems: 'flex-start', justifyContent:'center' , borderBottomColor: 'red', borderBottomWidth: 1, }}>
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
                        <View style={{ marginHorizontal: 10 , height: 50, alignItems: 'flex-start', justifyContent:'center', borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                            <Text>태스크 분류</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1,  }}>
                        <TouchableOpacity>
                            <Text>시작날짜</Text>
                        </TouchableOpacity>                        
                        <Text>>></Text>
                        <TouchableOpacity>
                            <Text>종료날짜</Text>
                        </TouchableOpacity>                        
                    </View>
                </View>
                <View style={{height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                    <Radio checked={this.state.part1Value === 1} onChange={(event) => {
                            if (event.target.checked) {
                            this.setState({ part1Value: 1 })
                            }
                        }} style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}>
                        <View>
                            <Text>1시간</Text>
                        </View>
                    </Radio>
                    <WhiteSpace />
                    <Radio checked={this.state.part1Value === 2} onChange={(event) => {
                            if (event.target.checked) {
                            this.setState({ part1Value: 2 })
                            }
                        }} style={{ borderWidth: 1, borderColor: '#999', margin: 10 }} >
                        <View>
                            <Text>1일</Text>
                        </View>
                    </Radio> 
                </View>    
                <View>
                    <View style={{height: 50, alignItems: 'flex-start', justifyContent:'center', borderBottomColor: 'red', borderBottomWidth: 1,}}>
                        <Text>반복주기</Text>
                    </View>
                    <View style={{height: 50, alignItems: 'flex-start', justifyContent:'center', borderBottomColor: 'red', borderBottomWidth: 1,}}>
                        <Text>장소</Text>
                    </View>
                    <View style={{height: 50, alignItems: 'flex-start', justifyContent:'center', borderBottomColor: 'red', borderBottomWidth: 1,}}>
                        <Text>메모</Text>
                    </View>
                    <View style={{height: 50, alignItems: 'flex-start', justifyContent:'center', borderBottomColor: 'red', borderBottomWidth: 1,}}>
                        <Text>참여자</Text>
                    </View>                    
                </View>
                <View>
                    <Text>미리알림</Text>
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                        <Text>1시간</Text>
                        <Text>1일</Text>
                        <Text>없음</Text>
                    </View>                    
                </View>
            </View>
        );
    }
}
export default CreateTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});