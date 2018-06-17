import React from 'react';
import {Font, AppLoading} from 'expo';
import {
  Root,
  Text,
  Header,
  Body,
  Container,
  Title,
  Left,
  Right,
  Button,
  Icon
} from 'native-base';

// import components
import HeaderApp from './components/header/header';
import ContentApp from './components/content/content';

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
      Roboto: await
      import ("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: await
      import ("native-base/Fonts/Roboto_medium.ttf")
    })
    this.setState({
      loaded: true
    })
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
          <Container>
            <Text>Hello World</Text>
          </Container>
      );
    }
  }
}