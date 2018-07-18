import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert, ScrollView } from 'react-native';
import { Rootstack } from '../components/SignIn/index';
import { Rootlogin } from '../components/SignOut/index';
import { isSignedIn } from './auth'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Provider } from 'react-redux';
import { onLogin, onLogout, onLoad, onLoadSuccess, onError } from '../store/user/actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, ListItem, Icon } from 'react-native-elements'
import Loading from './Loading'
import store from '../../src/store';



const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
class Index extends React.Component {
    fetchData() {
        // this.props.getData()
        // this.props.getImage()
      }
  componentDidMount() {
   
 
    this.props.onLoad()
    isSignedIn()
      .then(result => {
        console.log('result app '+result);
        
        if(result === true) {
          console.log('PADAHAL KESINI LAGI ');
          console.log('did DI DALEM LAGI sEBELUM'+this.props.users.loginStatus);
        //   this.props.getData()
          this.props.onLogin()
          this.props.onLoadSuccess()

          console.log('MASUK TRUEEEEEEEEE');
        }
        else{

          this.props.onLogout()

          console.log('MASUK FALSEEEEEEEEEEEE');
          console.log('SEBENARNYA APA YANG TERJADI'+this.props.users.loginStatus);
          console.log('DENGAN LOADING'+this.props.users.loading);
        }
      })
      .catch(err => {
        console.log(err+'drowning at seaaaaaaaaaaaaaaaaaaaaaaaaaa');
        this.props.onError()
        
        // this.setState({
        //   isChecked: true
        // })
      })
  }


  

render() {
if (this.props.users.loading===true) {
    return (<Loading />);
//  return (<View><Text>I wanna</Text></View>);
} 
else if (this.props.users.error===true){
    return (<View><Text>I wanna</Text></View>);
}
else {
     if (this.props.users.loginStatus===true) {
        return (<Provider store={store} ><Rootstack /></Provider>);
        // return (<View><Text>Hold your hand</Text></View>);
        }
        else if (this.props.users.loginStatus===false){
           return (<Rootlogin />);
        }
} 


 // this is the content you want to show after the promise has resolved

}

}

const mapStateToProps = state => ({
    users: state.data
  })
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({
    onLogin, onLogout, onLoad, onLoadSuccess, onError
  }, dispatch)
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Index);


