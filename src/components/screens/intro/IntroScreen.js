import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

import { getAssetByFilename } from '@util/Images';
import { colors } from '@util/Colors'

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    }
});

const slides = [
    {
        key: '1',
        title: '',
        text: '',
        image: getAssetByFilename('intro1'),
        imageStyle: styles.image,
        backgroundColor: colors.intro1
    },
    {
        key: '2',
        title: '',
        text: '',
        image: getAssetByFilename('intro2'),
        imageStyle: styles.image,
        backgroundColor: colors.intro2
    },
    {
        key: '3',
        title: '',
        text: '',
        image: getAssetByFilename('intro3'),
        imageStyle: styles.image,
        backgroundColor: colors.intro3
    }
]


class Intro extends Component {    

    render() {
        return (
            <AppIntroSlider
                slides={slides}
            //    renderItem={this._renderItem}
                bottomButton
                showPrevButton
                showSkipButton
            // hideNextButton
            // hideDoneButton
                onSkip={this._onskip}
                onDone={this._onDone}
                buttonTextStyle={{ color: 'black' }}
                activeDotStyle={{ backgroundColor: 'black' }}
            />
        );
    }

    _onskip = (props) => {
        console.log("skipped")
        this.props.navigation.navigate('Auth');
    }

    _onDone = (props) => {
        console.log("start")
        this.props.navigation.navigate('Auth');
    }

    // 이런식으로 쓸 수도 있지만 일단 이미지를 넣는것을 우선으로 하자
    // _renderItem = props => (
    //     <LinearGradient
    //       style={[
    //         styles.mainContent,
    //         {
    //           paddingTop: props.topSpacer,
    //           paddingBottom: props.bottomSpacer,
    //           width: props.width,
    //           height: props.height,
    //         },
    //       ]}
    //       colors={props.colors}
    //       start={{ x: 0, y: 0.1 }}
    //       end={{ x: 0.1, y: 1 }}
    //     >
    //       <Ionicons
    //         style={{ backgroundColor: 'transparent' }}
    //         name={props.icon}
    //         size={200}
    //         color="white"
    //       />
    //       <View>
    //         <Text style={styles.title}>{props.title}</Text>
    //         <Text style={styles.text}>{props.text}</Text>
    //       </View>
    //     </LinearGradient>
    //   );
}
export default Intro;

