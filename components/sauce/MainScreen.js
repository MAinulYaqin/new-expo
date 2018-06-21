import React, {Component} from 'react';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Icon} from 'native-base';

// import components
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

export default class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name="camera" style={{paddingLeft: 10}} />,
        headerTitle: 'Yaudin',
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: "center"
        },
        headerRight: <Icon name="paper-plane" style={{paddingRight: 10}} />
    }

    static navigatorStyle = {
        statusBarColor: 'blue'
    }

    render() {
        return (
            <AppTabNavigator />
        )
    }
}

const AppTabNavigator = TabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
        renderIndicator: () => null
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})