import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ModalProvider from './src/modal/ModalProvider';
import Main from './src/Main';

const App: React.VFC = () => {
  return (
    <ModalProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Main />
      </View>
    </ModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
