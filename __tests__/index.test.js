import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TestUmeng from '../src/index';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = renderer.create(
    <TestUmeng />,
  );
  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
