import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Font, AppLoading} from 'expo';
import {Text, Button, Root} from 'native-base';


const styleButton = {
  marginLeft: '50%',
  transformX: '-50px'
}

export default class App extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      loaded: false
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: import("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: import("native-base/Fonts/Roboto_medium.ttf")
    })
    this.setState({loaded: true})
  }

  render() {
    if (this.state.loaded) {
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
            <Text>Surprise! It's me AinulBedjo</Text>
            <Button onClick={() => { alert('hay :D') }} style={{...styleButton}}><Text>Hey There</Text></Button>
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
});
