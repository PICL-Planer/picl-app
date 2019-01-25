import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Intro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Intro</Text>
            </View>
        );
    }
}
export default Intro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});