import React, { Component } from 'react';
import { View, Button, NativeModules } from 'react-native';
import PropTypes from 'prop-types';


class TestPage2 extends Component {

  static componentName = 'TestPage2';

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
    NativeModules.UmengAnalytics.beginLogPageView('TestPage2');
  }

  componentWillUnmount() {
    NativeModules.UmengAnalytics.endLogPageView('TestPage2');
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title={'Image Picker'}
          onPress={() => { navigate(''); }}
        />
      </View>
    );
  }
}

export default TestPage2;
