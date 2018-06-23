import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import {
  Icon,
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Title,
  Button
} from 'native-base';

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container>
        <Header style={styles.androidHeader}>
          <Left>
            <Icon name="camera" style={{ paddingLeft: 10 }} />
          </Left>
          <Body style={styles.androidTitle}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Billabong',
                fontWeight: '300',
                fontSize: 27
              }}>
              Yaudin
            </Text>
          </Body>
          <Right>
            <Icon name="paper-plane" style={{ paddingRight: 10 }} />
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white'
      }
    })
  },
  androidTitle: {
    ...Platform.select({
      android: {
        alignItems: 'flex-end',
        marginTop: 10
      }
    })
  }
});
