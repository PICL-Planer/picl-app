import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator, } from 'react-navigation';
// 해당 네비게이터도 사용할 수 있다 
// 라이브러리 설명 : https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// 현재 위 네비게이터를 쓰면 오류가 난다 

import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { colors } from '@util/Colors';

import HomeStackNavigator from '@navigation/HomeStackNavigator';
import ChatStackNavigator from '@navigation/ChatStackNavigator';
import TaskStackNavigator from '@navigation/TaskStackNavigator';
import SettingStackNavigator from '@navigation/SettingStackNavigator';

class IconWithBadge extends React.Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
          <Ionicons name={name} size={size} color={color} />
          {badgeCount > 0 && (
            <View
              style={{
                // /If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )}
        </View>
      );
    }
  }

const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
  };


//const TabNavigator = createMaterialBottomTabNavigator({
const TabNavigator = createBottomTabNavigator({
    // 기본적으로 내부의 내부의 화면을 들어가려면 StackNavigator를 써야 한다 
    Home: { screen: HomeStackNavigator, },
    Chat: { screen: ChatStackNavigator },
    Task: { screen: TaskStackNavigator },
    Setting: { screen: SettingStackNavigator },
}, {
    navigationOptions: ({navigation}) => ({
        //...MainTabNavigationOptions,
        header: null,
        
    }),
    defaultNavigationOptions: ({ navigation }) => ({   
            // tabBarLabel: ({ focused }) => {
            //     const { routeName } = navigation.state;
            //     console.log(navigation.state)
            //     switch (routeName) {
            //         case 'Home':
            //             return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('홈')}</Text>;
            //         case 'Chat':
            //             return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('쳇')}</Text>;
            //         case 'Task':
            //             return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('태스크')}</Text>;
            //         case 'Setting':
            //             return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('설정')}</Text>;
            //         default:
            //             return null;
            //     }
            // }
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;

                switch (routeName) { 
                    case 'Home':
                        iconName = `ios-calendar${focused ? '' : ''}`;
                        // Sometimes we want to add badges to some icons. 
                        // You can check the implementation below.
                        IconComponent = HomeIconWithBadge; 
                        break;
                    case 'Chat':
                        iconName = `md-chatboxes${focused ? '' : ''}`;
                        IconComponent = HomeIconWithBadge; 
                        break;
                    case 'Task':
                        iconName = `md-list-box${focused ? '' : ''}`;
                        break; 
                    case 'Setting':
                        iconName = `md-settings${focused ? '' : ''}`;
                        break; 
                    default:
                        return null;
                }               
        
                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
              },
        }),
        animationEnabled: true,
        swipeEnabled: Platform.select({ android: true, ios: false }),
        tabBarOptions: {
            //  indicatorStyle: {
            //      backgroundColor: 'yellow'
            // },   // TopTap에서 사용
            labelStyle: {

            },
            style: {
                height: 50,
                backgroundColor: 'white',
                borderTopColor: 'gray',
                borderTopWidth: 1,
                elevation: 0
            },
            tabStyle: {
                alignItems: 'center',
            }
        }
    })
export default TabNavigator;

const styles = StyleSheet.create({
    txt: {
        color: 'black',
        fontSize: 15,
        paddingVertical: 15
        //justifyContent: 'center',
        //alignItems: 'center',
    },
})