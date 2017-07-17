import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TestUmeng extends Component {
  static componentName = 'TestUmeng';

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return <View><Text>Test Umeng</Text></View>;
  }
}
