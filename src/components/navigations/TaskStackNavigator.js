import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { BothHeaderNavigationOptions } from '@navigation/options/task/BothHeaderNavigationOptions';


import TaskScreen from '@screen/task/TaskScreen';


const routeConfig = {
    Task: { screen: TaskScreen, navigationOptions: BothHeaderNavigationOptions }

}

const navigatorConfig = {
    initialRouteName: 'Task',
    gesturesEnabled: true,
    //navigationOptions: RightHeaderNavigationOptions,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
}

// default 안하고 바로 export 하면 에러가 난다 
const TaskStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
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
export default TaskStackNavigator;