/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import { StackNavigator, TabNavigator} from 'react-navigation';

import SplashScreen from './pages/SplashScreen'; 
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import HomeScreen from './pages/HomeScreen';
import Maps from './pages/Maps';

const App = StackNavigator({  
    
  SplashScreen: {screen: SplashScreen},
  LoginScreen: {screen: LoginScreen},
  RegisterScreen: {screen: RegisterScreen},
  HomeScreen: {screen: HomeScreen},
  Maps: {screen: Maps},
  
});


export default App;