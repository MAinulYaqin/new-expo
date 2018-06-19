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
                    <Button transparent>
                        <Icon name="menu"/>
                    </Button>
                </Left>
                
                <Body style={styles.androidTitle}>
                    <Title>Header</Title>
                </Body>

                <Right />
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
        })
    },
    androidTitle: {
        ...Platform.select({
            android: {
                alignItems: 'flex-end'
            }
        })
    }
})