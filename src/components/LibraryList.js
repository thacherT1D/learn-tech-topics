import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Accordion } from 'native-base';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
      return <ListItem library={library} />;
  }

  render() {
    return (
      <View>
        <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id}
        />
        <Accordion dataArray={this.props.libraries} expanded={0} />
      </View>

    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
