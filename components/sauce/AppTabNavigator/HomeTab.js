import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';
import {Icon, Container, Content} from 'native-base';

// import components
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container>
                <Content>
                    <CardComponent imageSource="2" likes="20"/>
                    <CardComponent imageSource="3" likes="103"/>
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHight
            }
        }),
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
    }
});