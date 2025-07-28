import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from './src/components/NavigationBar';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
};

export default App;
