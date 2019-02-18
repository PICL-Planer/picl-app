import React from 'react';
import { 
    Platform, 
    StyleSheet, 
    TouchableOpacity, 
    Text, 
    View,
    Easing,
    Animated   
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from '@navigation/MainTabNavigator';


//import { CommonHeaderNavigationOptions } from '@navigation/options/CommonHeaderNavigationOptions';

//import CashScreen from "@screen/shop/header/CashScreen";
//import PurchaseHistoryScreen from '@screen/shop/header/PurchaseHistoryScreen';
//import GoodsDetailScreen from "@screen/shop/detail/GoodsDetailScreen";
//import AntDApp from "@navigation/AntDStackNavigator";

const routeConfig = {
    MainTab: { screen: MainTabNavigator,  },

   
    //Cash: { screen: CashScreen },
    //PurchaseHistory: { screen: PurchaseHistoryScreen },
    //GoodsDetail: { screen: GoodsDetailScreen },

    //AntD: { screen: AntDApp }
}

const navigatorConfig = {
    initialRouteName: 'MainTab',
    gesturesEnabled: true,
    navigationOptions: ({navigation}) => {

        const { index } = navigation.state;       
        //console.log(navigation.state); 
        switch(index) {
            case 0: 
            {
                return ({                    
                    header: null,
                });
            }
            case 1:
            {
                return ({
                    //...CommonHeaderNavigationOptions,
                    // // header를 null 로 하면 title은 custom header에서 해야 한다 
                    header: null                    
                });
            }
            case 2:
            {
                return ({                    
                    header: null
                });
            }
            case 3:
            {
                return ({
                    header: null
                    // ...CommonHeaderNavigationOptions,
                    // title: navigation.state.routes[index].routeName,
                    // headerLeft:
                    //     <TouchableOpacity
                    //         activeOpacity={0.5}
                    //         onPress={() => { navigation.navigate('Cash') }}
                    //     >
                    //         <Text style={{color: 'white', fontSize: 15, marginHorizontal: 10,}}>캐시/환불</Text>
                    //     </TouchableOpacity>,
                    // headerRight:
                    //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    //         <TouchableOpacity
                    //             activeOpacity={0.5}
                    //             onPress={() => navigation.navigate('PurchaseHistory')}
                    //         >
                    //             <Text style={{color: 'white', fontSize: 15, marginHorizontal: 10,}}>구매히스토리</Text>
                    //         </TouchableOpacity>
                    //     </View>,                    
                });
            }
            case 4: 
            {
                return ({
                    header: null
                })
            }
        }            
    },
    
    // 아래 방식은 옛날 방식이다 경로를 지정해 주는데 이 경로가 라이브러리 버전이 바뀌면 같이 바뀐다 (위험)
    //transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade }),
    // https://reactnavigation.org/docs/en/stack-navigator.html#modal-stacknavigator-with-custom-screen-transitions
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const height = layout.initHeight;
            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [height, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return { opacity, transform: [{ translateY }] };
        },
    }),
}
const MainStackNavigator = createStackNavigator(routeConfig, navigatorConfig);
//export default MainStackNavigator;

// 기본 RootStack을 지정하는 네비게이터 
// Stack -> Stack -> Stack 이런 식의 호출 구조가 복잡해보이지만 일단 확장성을 생각해서 한단계 Stack을 더 넣어 본다 
const rootRouteConfig = {
    MainRoot: { screen: MainStackNavigator },
    // 셋팅을 넣나?? 뭘 넣나?? 바로 탭??
}

const rootNavigatorConfig = {
    mode: 'card',       // default screen transitions.
    //navigationOptions: {
    //    header: null    // 여기에서는 헤더를 직접 만들어야 함
    //}
}

const RootNavigator = createStackNavigator(rootRouteConfig, rootNavigatorConfig);
export default RootNavigator;

