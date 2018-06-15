import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Font, AppLoading} from 'expo';
import {Button, Root, Text, Card, Container, Header, Left, Body, Right, Icon} from 'native-base';
import {FontAwesome} from '@expo/vector-icons';

export default class App extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      name: 1,
      loaded: false
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: await import("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: await import("native-base/Fonts/Roboto_medium.ttf")
    })
    this.setState({loaded: true})
  }

  render() {
    if (this.state.loaded !== true) {
      return (
        <Root>
          <AppLoading />
        </Root>
      )
    } else {
      return (
        <Root>

          <View>
            <Container>
              <Header>
                <Left>
                  <FontAwesome />
                </Left>
              </Header>

              <Text>
                Hello There :D
              </Text>
            </Container>
          </View>
        </Root>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_center: {
    // marginLeft: '50%',
    alignItems: 'center',
    flex: 0
  },
  card_one: {
    height: '200px',
    width: '80%',
    padding: '20px',
    overflow: 'hidden',
  }
});
