import React, {Component} from 'react';
import {Container} from 'native-base';
import {StackNavigator} from 'react-navigation';

// import components
import MainScreen from './sauce/MainScreen';

const AppStackNavigator = StackNavigator({
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