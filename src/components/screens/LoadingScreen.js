import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    Alert,
    Animated,
} from "react-native";
import { AppLoading, Asset, Font, Icon } from 'expo';

//import * as Animatable from 'react-native-animatable';

const Loading = (props) => {
    //console.log(props);
    const auth = props.navigation.state.params;
    if(auth !== undefined && auth !== null) {
        if(auth.isLogin === true) {
            props.navigation.navigate('Main');
            
        } else {
            Alert.alert('로그인에 실패 했습니다')
            props.navigation.navigate('Auth');
        }
    } else {
        Alert.alert('로그인에 실패 했습니다')
        props.navigation.navigate('Auth');
    } 
    
    return (
        null
    )
}
export default Loading;

// 일단 여기서 체크하지는 않는다
_switchAuth = async (props) => {
    const userToken = await AsyncStorage.getItem("userToken");
    console.log(`user token: ${userToken}`);
    if(userToken !== null) {
        props.navigation.navigate("Main");
    } else {
        props.navigation.navigate("Auth");
    }
}


// 여기서도 추가 로딩을 할 수는 있다 
// export class TestAppLoading extends React.Component {
//     state = {
//         isLoadingComplete: false,
//     };

//     render() {
//         if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//             return (
//                 <AppLoading
//                     startAsync={this._loadResourcesAsync}
//                     onError={this._handleLoadingError}
//                     onFinish={this._handleFinishLoading}
//                 />
//             );
//         } else {
//             return (
//                 <View style={styles.container}>
//                     {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//                     <AppNavigator /> */}
//                 </View>
//             );
//         }
//     }

//     _loadResourcesAsync = async () => {
//         return Promise.all([
//             Asset.loadAsync([
//                 // require('./assets/images/robot-dev.png'),
//                 // require('./assets/images/robot-prod.png'),
//             ]),
//             Font.loadAsync({
//                 // This is the font that we are using for our tab bar
//                 ...Icon.Ionicons.font,
//                 // We include SpaceMono because we use it in HomeScreen.js. Feel free
//                 // to remove this if you are not using it in your app
//                 'space-mono': require('../../../assets/fonts/SpaceMono-Regular.ttf'),
//             }),
//         ]);
//     };

//     _handleLoadingError = error => {
//         // In this case, you might want to report the error to your error
//         // reporting service, for example Sentry
//         console.warn(error);
//     };

//     _handleFinishLoading = () => {
//         this.setState({ isLoadingComplete: true });
//     };
// }



// // Loading에서는 화면 처리를 따로 안함 
// class LoadingScreen extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             spinValue: new Animated.Value(0),           
//             spin: null,
//             unAuthorization : false
//         }
//         // 마음에 드는 처리는 아니다.. 일단 넘어가자 
//         this.state.spin = this.state.spinValue.interpolate({
//             inputRange: [0, 1],
//             outputRange: ['0deg', '1260deg']
//         }); 

//         const auth = props.navigation.state.params;
//         if(auth !== undefined && auth !== null) {
//             if(auth.isLogin === true) {
//                 props.navigation.navigate('Main');
//             } else {
//                 Alert.alert('로그인에 실패 했습니다')
//                 props.navigation.Navigate('Auth');
//             }
//         } else {
//             this._switchAuth();
//         } 
//     }

//     _switchAuth = async () => {
//         const userToken = await AsyncStorage.getItem("userToken");
//         console.log(userToken);
//         if(userToken !== null) {
//             this.props.navigation.navigate("Main");
//         } else {
//             this.props.navigation.navigate("Auth");
//         }
//     }

//     animateRotateLoop = (spinValue, duration) => {
//         if (!duration) {
//             duration = 2000;
//         }
//         /**
//          * Animation for buffering image.
//          * First set up animation
//          * Second interpolate beginning and end values (in this case 0 and 1)
//          */
//         Animated.loop(
//             Animated.sequence([
//                 Animated.timing(spinValue, {
//                     toValue: 1,
//                     duration,
//                     delay: 0,
//                 }),
//                 Animated.timing(spinValue, {
//                     toValue: 0,
//                     duration,
//                 }),
//             ]),
//             {
//                 iterations: 4,
//             },
//         ).start();
//     };

//     componentDidMount() {
//         this.animateRotateLoop(this.state.spinValue, 3000);
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Animated.Image
//                     source={require('../../../assets/rpg.png')}
//                     style={{
//                         width: 100,
//                         height: 100,
//                         marginBottom: 16,
//                         transform: [{ rotate: this.state.spin }],
//                     }}
//                 />
//                 <Animatable.Text
//                     animation='fadeIn'
//                     iterationCount={'infinite'}
//                     direction='alternate'
//                     style={styles.text}
//                 >
//                     {'Loading'}
//                 </Animatable.Text>
//             </View>
//         );
//     }
// }
//export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text :{
        color: "red",
        fontSize: 26
    },
});