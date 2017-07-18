import React, { Component } from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import UmengNativeModule from '../native_module/umeng';

class Home extends Component {

  static componentName = 'Home';

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
    UmengNativeModule.onPageBegin('test Home page');
  }

  componentWillUnmount() {
    UmengNativeModule.onPageEnd('test Home page');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title={'Image Picker'}
          onPress={() => { navigate('TestPage1'); }}
        />
      </View>
    );
  }
}

export default Home;
