/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Root from './src/navigator';


const App = () => {
  return (
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  );
};

export default App;
