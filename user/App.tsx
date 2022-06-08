/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react';

// Providers
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './src/redux/store';

// Components
import Root from './src/navigators';

const App: () => ReactNode = () => {
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
