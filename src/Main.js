import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { getAllImagesOfAsset } from '@util/Images';
import AppSwitchNavigator from '@navigation/AppSwitchNavigator';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAssetLoaded: false
        }
    }

    render() {
        if (!this.state.isAssetLoaded && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onError={this.handleLoadingError}
                    onFinish={this.handleFinishLoading}
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    <AppSwitchNavigator />
                </View>
            );
        }
    }

    cacheImages = (images) => {
        return images.map(image => {
            if(typeof image === 'string') {
                return Image.prefetch(image);
            } else {
                return Asset.fromModule(image).downloadAsync();
            }
        });
    }

    // https://docs.expo.io/versions/v31.0.0/guides/offline-support.html
    // https://docs.expo.io/versions/v31.0.0/guides/preloading-and-caching-assets.html
    // https://docs.expo.io/versions/v31.0.0/guides/assets.html
    // 위 내용은 나중에 다시확인 
    // app Expo.update() (자동/수동)
    // OTA (변경내용 업데이트)
    // load image asset 
    loadResourcesAsync = async () => {
        const images = getAllImagesOfAsset();
        const test = this.cacheImages(images);

        return await Promise.all([
            //Asset.loadAsync([
            ...test,
            //]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                'Space-Mono': require('@asset//fonts/SpaceMono-Regular.ttf'),
                // UI-Kitten
                fontawesome: require('@asset/fonts/fontawesome.ttf'),
                icomoon: require('@asset/fonts/icomoon.ttf'),
                'Righteous-Regular': require('@asset/fonts/Righteous-Regular.ttf'),
                'Roboto-Bold': require('@asset/fonts/Roboto-Bold.ttf'),
                'Roboto-Medium': require('@asset/fonts/Roboto-Medium.ttf'),
                'Roboto-Regular': require('@asset/fonts/Roboto-Regular.ttf'),
                'Roboto-Light': require('@asset/fonts/Roboto-Light.ttf'),
                // Ant Design
                'AntIcon': require('@asset/fonts/iconfont.ttf')
            }),
        ]);
    };

    handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    handleFinishLoading = () => {
        this.setState({ isAssetLoaded: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
