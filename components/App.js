import React, {Component} from 'react';
import {Container} from 'native-base';
import {createStackNavigator} from 'react-navigation';

// import components
import MainScreen from './sauce/MainScreen';

const AppStackNavigator = createStackNavigator({
    Main: {
        screen: MainScreen
    }
})

export default class App extends Component {
    render() {
        return (
            <AppStackNavigator />
        )
    }
}