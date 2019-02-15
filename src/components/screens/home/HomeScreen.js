import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { screenWidth } from '@util/Styles';
import PropTypes from "prop-types";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const datetimeToString = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  }

class HomeScreen extends Component { 
    constructor(props){
        super(props);

        this.state = {
            items: {},
            today: datetimeToString(),
        }
    }
    
    // 검색하면서 네비게이션 헤더에 매서드를 추가했을때 자기자신 화면에 대한 콜백함수를 이런식으로 등록함을 찾음
    componentDidMount() {
        this.props.navigation.setParams({ onPressLeftHeader: () => this.gotoToday() })
    }

    gotoToday = () => {
        //console.log("gotoToday");     
        // 직접 구현은 못했고 검색하다보니 chooseDay 이라는 api가 있는 것을 나중에 알게 됨
        this.agenda.chooseDay(datetimeToString());
    }

    render() {
        return (
            <View style={styles.container}>                
              <Agenda
                    // 참조를 만들어서 gotoToday 에서 사용할 수 있다.. 뭐 이런 방식...
                    ref={(agenda) => { this.agenda = agenda; }}
                    monthFormat={'yyyy MM'}
                    // the list of items that have to be displayed in agenda. If you want to render item as empty date
                    // the value of date key kas to be an empty array []. If there exists no value for date key it is
                    // considered that the date in question is not yet loaded
                    items={this.state.items}
                    // callback that gets called when items for a certain month should be loaded (month became visible)
                    loadItemsForMonth={this.loadItems}
                    // callback that fires when the calendar is opened or closed
                    onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                    // callback that gets called on day press
                    onDayPress={(day) =>{ console.log('day pressed') }}
                    // callback that gets called when day changes while scrolling agenda list
                    onDayChange={(day)=>{console.log('day changed')}}
                    // initially selected day
                    selected={this.state.today}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    //minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    //maxDate={'2012-05-30'}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // specify how each item should be rendered in agenda
                    renderItem={this.renderItem}
                    // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                    // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                    // specify how empty date content with no items should be rendered
                    renderEmptyDate={this.renderEmptyDate}
                    // specify how agenda knob should look like
                    //renderKnob={() => {return (<View />);}}
                    // specify what should be rendered instead of ActivityIndicator
                    //renderEmptyData = {() => {return (<View />);}}
                    // specify your item comparison function for increased performance
                    rowHasChanged={this.rowHasChanged}
                    // Hide knob button. Default = false
                    //hideKnob={true}
                    markingType={'period'}
                    // // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                    // markedDates={
                    //     {
                    //         '2019-02-10': {textColor: 'green'},
                    //         '2019-02-12': {startingDay: true, color: 'green'},
                    //         '2019-02-13': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                    //         '2019-02-16': {disabled: true, startingDay: true, color: 'green', endingDay: true}
                    //    }
                    // }
                    // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
                    onRefresh={() => console.log('refreshing...')}
                    // Set this true while waiting for new data from a refresh
                    refreshing={false}
                    // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
                    //refreshControl={null}
                    // agenda theme
                    theme={{
                        //...calendarTheme,
                        selectedDayTextColor: 'red',
                        agendaDayTextColor: 'yellow',
                        agendaDayNumColor: 'green',
                        agendaTodayColor: 'red',
                        agendaKnobColor: 'blue',
                        agendaKnobColor: 'green',
                        //calendarBackground: 'red',
                        selectedDayBackgroundColor: '#00adf5',
                    }}
                    // agenda container style
                    style={{}}
                    />
            </View>
        );
    }

    loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];
              const numItems = Math.floor(Math.random() * 5);
              for (let j = 0; j < numItems; j++) {
                this.state.items[strTime].push({
                  name: 'Item for ' + strTime,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          //console.log(this.state.items);
          const newItems = {};
          Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
          this.setState({
            items: newItems
          });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
      }

      timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }

      renderItem = (item) => {
        return (
          <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
      }

      rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
      }

      renderEmptyDate = () => {
        return (
          <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
      }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
});