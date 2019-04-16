import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Button,
  Text } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class App extends React.Component {
  render() {
    return (
      <Container>
      <Header>
        <Left/>
        <Body>
          <Title>Learn Tech</Title>
        </Body>
        <Right />
      </Header>
        <Content padder>
          <Provider store={createStore(reducers)}>
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
          </Provider>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
