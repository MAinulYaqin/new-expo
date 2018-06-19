import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Icon, Header, Body, Title} from 'native-base';

export default class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name="camera" style={{paddingLeft: 10}} />,
        headerTitle: 'Yaudin',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center"
        },
        headerRight: <Icon name="paper-plane" style={{paddingRight: 10}} />
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MainScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})