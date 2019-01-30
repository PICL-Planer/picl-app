import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import NavigationService from '@navigation/options/NavigationService';
import { BothHeaderNavigationOptions } from '@navigation/options/setting/BothHeaderNavigationOptions';

//import SettingsScreen2 from '@screen/setting/SettingsScreen2';
import SettingsScreen from '@screen/setting/SettingsScreen';

//import NoticeScreen from '@screen/setting/header/NoticeScreen';
//import SystemAlarmScreen from '@screen/setting/header/SystemAlarmScreen';

//import Setting5 from '@screen/setting/Setting5';
//import Setting6 from '@screen/setting/Setting6';


import { colors } from '@util/Colors';

const routeConfig = {
    //Main: { screen: SettingsScreen2, navigationOptions: BothHeaderNavigationOptions },

    //Notice: { screen: NoticeScreen },
    //SystemAlarm: { screen: SystemAlarmScreen },

    //Setting5: { screen: Setting5 },
    //Setting6: { screen: Setting6 },

    // Settings: { screen: SettingsScreen, navigationOptions: { 
    //     title: 'Settings'.toUpperCase(),  
    //     headerTitleStyle: {
    //         flex: 1,
    //         color: 'black',
    //         textAlign: 'center',   //
    //         alignSelf: 'center',
    //         marginLeft: -30,
    //     },
    //     headerStyle: {
    //         backgroundColor: colors.blueyGray,
    //         borderBottomColor: 'red',
    //         borderBottomWidth: 1,
    //         elevation: 0,
    //         //
    //     },
    // }},
    Settings:  { screen: SettingsScreen, navigationOptions: BothHeaderNavigationOptions }
}

const navigatorConfig = {
    initialRouteName: 'Settings',
    gesturesEnabled: true,
    //navigationOptions: BothHeaderNavigationOptions,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
}

const SettingsStackNavigator = createAppContainer(createStackNavigator(routeConfig, navigatorConfig));
// react에서 DOM에 직접적인 접근을 할때 ref 라는 키워드를 사용할 수 있다 
// 네비게이션 서비스를 전역으로 두고 쓸 수 있을까?? 화면 이동에 대한 제약을 아예 없애버린다면??
const SettingsStack = () => {
    return (
        <SettingsStackNavigator 
                ref={(navi) => { NavigationService.setTopLevelNavigator(navi); }}
        />
    );
}
export default SettingsStack;