import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import AddEmployee from './AddEmployee'
import ImageScreen from './ImageScreen'
import LogoutScreen from './LogoutScreen'
import ArticleScreen from './ArticleScreen'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements'
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';

const CustomDrawerContentComponent = (props) => (
  
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
        <LogoutScreen {...props} />
      </SafeAreaView>
    </ScrollView>
  );

const HomeStack = createStackNavigator({
    Home: {
      screen : HomeScreen,
    },
    Article: {
      screen : ArticleScreen,
    //   drawerLockMode: 'locked-closed'
    }
  },{
    
    // headerMode: 'none',
   });
  
   const ImageStack = createStackNavigator({
    Image: {
      screen : ImageScreen,
    //   drawerLockMode: 'locked-closed'
    },
    Article: {
      screen : ArticleScreen,
    //   drawerLockMode: 'locked-closed'
    },
    
  },{
    
    // headerMode: 'none',
   });
  
  
  export const Rootstack = createDrawerNavigator({
    Home: {
        screen : HomeStack,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: 
                <Entypo name="home" size={25} />
              ,
          }
    },
    Image : {
        screen : ImageStack,
        navigationOptions: {
            drawerLabel: 'Image',
            drawerIcon: 
                <Feather name="briefcase" size={25} />
              ,
          }
    },
    },{
        contentComponent : CustomDrawerContentComponent
      }
    
    )

// 
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});



