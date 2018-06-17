import React from 'react';
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

export default class HeaderApp extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name="menu"/>
                    </Button>
                </Left>
                
                <Body>
                    <Title>Ini Header</Title>
                </Body>

                <Right>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        )
    }
}