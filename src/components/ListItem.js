import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Text } from 'native-base';
// import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
          <CardItem body>
            <Text>{library.item.content}</Text>
          </CardItem>
      );
    }
  }

  render() {
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <Card>
            <CardItem header>
              <Text>{title}</Text>
            </CardItem>
            {this.renderDescription()}
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
