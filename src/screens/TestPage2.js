import React, { Component } from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import UmengNativeModule from '../native_module/umeng';

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

  componentWillMount() {
    UmengNativeModule.onPageBegin('test Test page 2');
  }

  componentWillUnmount() {
    UmengNativeModule.onPageEnd('test Test page 2');
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
