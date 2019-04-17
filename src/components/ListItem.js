import React, { Component } from 'react';
import { View } from 'react-native';
import { Accordion, Card, CardItem, Text } from 'native-base';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    console.log(this.props.library);
    return (
        <Card>
          <CardItem>
            <Text>{this.props.library.item.title}</Text>
          </CardItem>
          <CardItem><Text>{this.props.library.item.content}</Text></CardItem>
        </Card>
    )
  }
}

export default ListItem;
