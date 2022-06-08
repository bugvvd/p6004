/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// providers
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './src/redux/store';

// components
import Root from './src/navigators';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StoreProvider store={store}>
          <Root />
        </StoreProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
