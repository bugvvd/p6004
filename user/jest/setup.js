import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-paper', () => {
  const React = require('react');
  const {View} = require('react-native');
  const RealModule = jest.requireActual('react-native-paper');
  const MockModule = {
    ...RealModule,
    Portal: ({children}) => <View>{children}</View>,
  };
  return MockModule;
});

// jest.mock(
//   'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
//   () => {
//     const {TouchableHighlight} = require('react-native');
//     const MockTouchable = props => {
//       return <TouchableHighlight {...props} />;
//     };
//     MockTouchable.displayName = 'TouchableOpacity';

//     return MockTouchable;
//   },
// );
