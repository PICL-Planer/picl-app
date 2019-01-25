import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage,
    StatusBar,
    ImageBackground,
    Platform,
    Notifications
} from "react-native";
import { SplashScreen, } from 'expo';

import { getAssetByFilename } from '@util/Images';
import { screenWidth, screenHeight } from '@util/Styles';
import { colors } from '@util/Colors';

import { ProgressBar } from "@shared/ProgressBar";

const delay = 1000;

// 이 단계에서 할 수있는 작업들이 여러개 있다 
// 1. 리소스 버전 확인 후 업데이트 (API 호출로 버전확인 필요)
// 2. 자동 로그인 (로그인 토큰을 관리해야 함)
// 3. 마지막 사용 화면 보여주기(2번과 연동한다면)
class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSkipped: false,
            progress: 0,
            //areReasourcesReady: false
        }
        // Expo의 app.json 파일의 splash screen을 제어 할 수 있음 (일단 사용안함-그림 사이즈가 정확해야 한다)
        SplashScreen.preventAutoHide(); // Instruct SplashScreen not to hide yet         
    }

    componentDidMount() {
        // 생성자 -> render() -> 이후에 호출된다 (라이프 사이클을 보면)
        //this.appAuthorization().then(this.onSplashSkipped);
        //this.cacheResourcesAsync() // ask for resources 
        //    .then(() => this.setState( { areResourcesReady: true })) // mark resources as loaded
        //    .catch(error => console.log(`Unexpected error thrown when loading: ${error.stack}`));

        //RkTheme.setTheme(KittenTheme);
        StatusBar.setHidden(true, 'none');
        this.timer = setInterval(this.updateProgress, delay);
        //console.log(`timer: ${this.timer}`);
        // 위치에 대한 판단은 나중에 바꿀 수 있다 main 에서는 리소스 로딩과 관련된 부분을 체크하고 
        // splash에서는 app 설정과 관련된 부분을 체크한다 

        // getUserChannel().then().catch() // API 호출로 가져온다 
        // createUserChannel();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // createUserChannel = () => {
    //     if(Platform.OS === "android") {
    //         Notifications.createChannelAndroidAsync('channelName', {
    //             name: 'name',
    //             priority: 'max',
    //             vibrate: [0, 250, 250, 250]
    //         })
    //     }
    // }

    updateProgress = () => {
        if (this.state.progress === 1) {
            clearInterval(this.timer);
            setTimeout(this.onLoaded, delay);
        } else {
            const randProgress = this.state.progress + (Math.random() * 0.5);
            this.setState({ progress: randProgress > 1 ? 1 : randProgress });
        }
    }

    onLoaded = () => {
        StatusBar.setHidden(false, 'fade');
        this.appAuthorization(); //.then(this.onSplashSkipped).catch(error => console.log(error.stack));           
        // const toHome = StackAction.reset({
        //     index: 0,
        //     action: [NavigationAction.navigate({ routeName: 'Home'})],
        // });
        // this.props.navigate.dispatch(toHome);
    }

    //splash 이미지가 스킵되게 구현 하려고 했는데 불필요해 보인다 (실제 Access token 테스트 전에는...)
    //onSplashSkipped = () => {
    //    this.setState({ isSkipped: true});
    //}

    appAuthorization = async () => {
        const userToken = await AsyncStorage.getItem("@Session:token");
        console.log(`userToken : ${userToken}`);
        if (userToken === 'successs') {
            //this.setState({ isSkipped: true})
            //this.props.navigation.navigate("Main");
        } else if( userToken === 'fail' ) {
            // 앱을 처음 설치하면 소개 화면이 나오게 한다 
            this.props.navigation.navigate("Auth");
        } else {
            // 현재는 아무이유 없이 3초 보여주는 중.... (변경)=> 사용자 인증 확인을 한다
            //setTimeout(() => {
            this.props.navigation.navigate("Walkthrough");
            //}, 3000);           
        } 
    }

    // async cacheResourcesAsync() {
    //     const images = [getAssetByFilename('splash')];
    //     const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    //     return Promise.all(cacheImages);
    // }

    render() {
        //if( this.state.isSkipped ) {
        //    return null;
        //}

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imgSplash}
                    source={getAssetByFilename('splash')}
                    onLoadEnd={() => {
                        // wait for image's content to fully load [`Image#onLoadEnd`] (https://facebook.github.io/react-native/docs/image#onloadend)
                        //console.log('Image#onLoadEnd: hiding SplashScreen');
                        SplashScreen.hide(); // Image is fully presented, instruct SplashScreen to hide
                    }}
                    fadeDuration={0}
                    resizeMethod='resize' // IOS에서는 기본적으로 resizing을 해주지만 Android에서는 그렇지 않다고 함
                >                    
                    <View style={styles.progressWrap}>
                        <ProgressBar
                            color={colors.accent}
                            style={styles.progress}
                            progress={this.state.progress}
                            width={screenWidth * 0.9}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgSplash: {
        width: '100%',
        height: '100%', // 높이가 안맞는 이유 확인 
        //resizeMode: 'contain'
    },
    progressWrap: {
        top: screenHeight * 0.8,
        alignItems: 'center',
        //backgroundColor : "rgb(134,154,183)", 
        //width: '100%',
    },
    progress: {
        backgroundColor: 'black',
    },
});