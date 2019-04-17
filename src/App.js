import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
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
  import LibraryList from './components/LibraryList';

export default class App extends React.Component {
  render() {
    return (
      <Container>
      <Header>
        <Left />
        <Body>
          <Title>Learn Tech</Title>
        </Body>
        <Right />
      </Header>
        <Content padder>
          <Provider store={createStore(reducers)}>
            <LibraryList />
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
