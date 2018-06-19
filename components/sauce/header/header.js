import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {
    Header,
    Body,
    Container,
    Title,
    Left,
    Right,
    Button,
    Icon
} from 'native-base';

export default class HeaderApp extends Component {
    render() {
        return (
            <Header style={styles.androidHeader}>
                <Left>
                    <Icon name="camera"/>
                </Left>

                <Body style={styles.androidTitle}>
                    <Title style={{color: white}}>Header</Title>
                </Body>

                <Right>
                    <Icon name="paper-plane" />
                </Right>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight,
            }
        }),
        backgroundColor: 'white'
    },
    androidTitle: {
        ...Platform.select({
            android: {
                alignItems: 'flex-end'
            }
        })
    }
})