import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class TaskScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TaskScreen</Text>
            </View>
        );
    }
}
export default TaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});