import React, {Component} from 'react';
import {
    Body,
    Container,
    Title,
    Left,
    Right,
    Button,
    Icon
} from 'native-base';

// import components
import Header from './header/header';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Header />
            </Container>
        )
    }
}