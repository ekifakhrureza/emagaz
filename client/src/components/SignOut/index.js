import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createDraweavigator } from 'react-navigation'

import LoginScreen from './LoginScreen';

export const Rootlogin = createStackNavigator({
    Login: {
      screen : LoginScreen,
      navigationOptions : {
        drawerLabel: () => null
      }
    }
  
  })
// 
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});