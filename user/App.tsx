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
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Components
import Root from './src/navigators';

const App: () => ReactNode = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Root />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
