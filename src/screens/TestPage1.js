import React, { Component } from 'react';
import { View, Button, NativeModules } from 'react-native';
import PropTypes from 'prop-types';


class TestPage1 extends Component {

  static componentName = 'TestPage1';

  static propTypes = {
    /* eslint-disable */
    navigation: PropTypes.any,
    /* eslint-enable */
  };

  static defaultProps = {
    navigation: {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    NativeModules.UmengAnalytics.beginLogPageView('TestPage1');
  }

  componentWillUnmount() {
    NativeModules.UmengAnalytics.endLogPageView('TestPage1');
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title={'Image Picker'}
          onPress={() => { navigate('TestPage2'); }}
        />
      </View>
    );
  }
}

export default TestPage1;
