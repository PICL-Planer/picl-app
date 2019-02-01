import 
{ 
  Easing, 
  Animated 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { RightHeaderNavigationOptions } from '@navigation/options/auth/RightHeaderNavigationOptions';
// 화면전환시 에니메이션 효과이다... 이런 디테일은 뭐.. 옵션은 아래서 설정 
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import LoginScreen from '@screen/auth/LoginScreen';
import SignUpScreen from '@screen/auth/SignUpScreen';
import FindPWScreen from '@screen/auth/FindPWScreen';

export default AuthStackNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen, },
    FindPW: { screen: FindPWScreen }
}, {
    initialRouteName: "Login",
    defaultNavigationOptions: RightHeaderNavigationOptions,

    // 아래 방식은 옛날 방식이다 경로를 지정해 주는데 이 경로가 라이브러리 버전이 바뀌면 같이 바뀐다 
    //transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade }),
    // 이 방식을 더 알아야 할 듯 
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
})
