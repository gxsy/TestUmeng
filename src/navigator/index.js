import { Platform, NativeModules } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as screens from '../screens';

NativeModules.UmengAnalytics.setDebugMode();

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: screens.Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    TestPage1: {
      screen: screens.TestPage1,
      navigationOptions: {
        title: 'TestPage1',
      },
    },
    TestPage2: {
      screen: screens.TestPage2,
      navigationOptions: {
        title: 'TestPage2',
      },
    },
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',
    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  },
);

export default AppNavigator;
