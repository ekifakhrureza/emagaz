import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert, ScrollView } from 'react-native';
import { Rootstack } from './src/components/SignIn/index';
import { Rootlogin } from './src/components/SignOut/index';
import { isSignedIn } from './src/components/auth'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Provider } from 'react-redux';
import store from './src/store';
import { onLogin, onLogout } from './src/store/user/actions';
import Index from './src/components/index'





const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
export default class App extends React.Component {
  // state = {
  //   isLogin: false,
  //   isChecked: false,
  // }



  // componentDidMount() {
  //   console.log('YENTUH GAK?'+store.getState().data.loginStatus);

  //   isSignedIn()
  //     .then(result => {
  //       console.log('result app '+result);
        
  //       if(result === true) {
  //         console.log('PADAHAL KESINI');
          
  //         store.dispatch(onLogin())
  //         console.log('CEK DALEM'+store.getState().data.loginStatus);
  //       }
  //       else{
  //         store.dispatch(onLogout())
  //       }
  //     })
  //     .catch(err => {
  //       console.log('drowning at sea');
        
  //       // this.setState({
  //       //   isChecked: true
  //       // })
  //     })
  // }


  

render() {
 
return (<Provider store={store} ><Index /></Provider>);
}

}


