import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Font, AppLoading} from 'expo';
import {Button, Root, Text} from 'native-base';

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
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Surprise! It's me {this.state.name === 1 ? 'Ainul' : 'AinulBedjo'}</Text>
            <Button style={styles.btn_center} 
              title="btn1" 
              onPress={() => {
                this.state.name === 1 ? this.setState({name: 2}) : this.setState({name: 1})
              }}>
              <Text>Hey There</Text>
            </Button>
          </View>
        </Root>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_center: {
    // marginLeft: '50%',
    alignItems: 'center',
    flex: 0
  },
});
