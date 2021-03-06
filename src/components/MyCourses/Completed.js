import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import CurrentData from '../../Data/CurrentData';
import CardThree from '../../components/Cards/CardThree';

class Completed extends Component {
  constructor(props) {
    super(props);
  }
  renderItem(item, index) {
    return (
      <CardThree
        item={item}
        completed
      />
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={CurrentData}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index}
        />
      </View>

    );
  }
}

export default Completed;