import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { BothHeaderNavigationOptions } from '@navigation/options/home/BothHeaderNavigationOptions';
import { RightHeaderNavigationOptions } from "@navigation/options/home/RightHeaderNavigationOptions"

//import { OldBothHeaderNavigationOptions } from '@navigation/options/home/OldBothHeaderNavigationOptions';

import HomeScreen from '@screen/home/HomeScreen';
import CreateTaskScreen from '@screen/home/CreateTaskScreen';

// import OldHomeScreen from '@screen/home/OldHomeScreen';
// import NoticeScreen from '@screen/home/NoticeScreen';
// import DetailNoticeScreen from '@screen/home/details/DetailNoticeScreen';

// import CouponScreen from '@screen/home/CouponScreen';
// import RechargeScreen from '@screen/home/RechargeScreen';

// import AdditionServiceScreen from '@screen/home/AdditionServiceScreen';
// import MyShopScreen from '@screen/home/MyShopScreen';
// import PcRoomScreen from '@screen/home/PcRoomScreen';
// import CSScreen from "@screen/home/CSScreen";

// import BestListScreen from '@screen/home/BestListScreen';
// import DetailListScreen from '@screen/home/details/DetailListScreen';
// import WebViewScreen from '@screen/home/WebViewScreen';

// import AlarmScreen from "@screen/home/header/AlarmScreen";
// import MyScreen from "@screen/home/header/MyScreen";

const routeConfig = {
    Home: { screen: HomeScreen, navigationOptions: BothHeaderNavigationOptions },
    CreateTask: { screen: CreateTaskScreen, navigationOptions: RightHeaderNavigationOptions },
    //OldHome: { screen: OldHomeScreen, navigationOptions: OldBothHeaderNavigationOptions },
    //Notice: { screen: NoticeScreen, },
    //DetailNotice: { screen: DetailNoticeScreen },

    //Coupon: { screen: CouponScreen, },                  // Push 테스트
    //Recharge: { screen: RechargeScreen },               // 코인시세
    
    //AdditionService: { screen: AdditionServiceScreen }, 
    //MyShop: { screen: MyShopScreen },
    //PCRoom: { screen: PcRoomScreen },
    //CS: { screen: CSScreen },

    //List: { screen: BestListScreen },
    //Detail: { screen: DetailListScreen },
    //WebView: { screen: WebViewScreen },

    //Alarm: { screen: AlarmScreen, },
    //My: { screen: MyScreen },


}

const navigatorConfig = {
    initialRouteName: 'Home',
    gesturesEnabled: true,
    //navigationOptions: RightHeaderNavigationOptions,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
}

// default 안하고 바로 export 하면 에러가 난다 
const HomeStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
// react에서 DOM에 직접적인 접근을 할때 ref 라는 키워드를 사용할 수 있다 
// 아이폰에서는 아래에서 에러남??
// const HomeStack = () => {
//     return (
//         <HomeStackNavigator 
//                         // ref={(navi) => {
//                         //         NavigationService.setTopLevelNavigator(navi);
//                         //     }}
//         />
//     );
// }
export default HomeStackNavigator;