import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import Navigator from '_navigations'

const App = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator/>
      </SafeAreaView>
  );
};

export default App;
