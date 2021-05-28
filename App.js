/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ThemeProvider } from 'react-native-paper';
import Home from './src/screens/Home';
import ProductList from './src/screens/ProductList';
import Login from './src/screens/Login';
import { HOME_SCREEN, LOGIN_SCREEN, PRODUCT_LIST_SCREEN } from './src/commons/screenNames';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name={LOGIN_SCREEN} component={Login} />
          <Stack.Screen name={HOME_SCREEN} component={Home} />
          <Stack.Screen name={PRODUCT_LIST_SCREEN} component={ProductList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
