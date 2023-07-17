import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './srceens/index'
const Routes: React.FC = () => {
  return <NavigationContainer>
    <MainScreen />
  </NavigationContainer>
};

export default Routes;