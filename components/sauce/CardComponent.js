import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Body, Card, Left, Content, CardItem, Thumbnail, Button, Icon } from 'native-base';


export default class CardComponent extends Component {
    render() {

        const images = {
            "1": require('../../assets/feeder/feed-1.jpg'),
            "2": require('../../assets/feeder/feed-2.jpg'),
            "3": require('../../assets/feeder/feed-3.png')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={images[1]} />
                        <Body>
                            <Text>Ainul</Text>
                            <Text note>June 21, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent><Icon style={{color: 'black'}} name="heart" /></Button>
                        <Button transparent><Icon style={{color: 'black'}} name="chatbubbles"/></Button>
                        <Button transparent><Icon style={{color: 'black'}} name="paper-plane"/></Button>
                    </Left>
                </CardItem>
                <CardItem style={{height: 20}}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>varun
                            </Text>
                            Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        'alignItems': 'center',
        'justifyContent': 'center',
    }
});