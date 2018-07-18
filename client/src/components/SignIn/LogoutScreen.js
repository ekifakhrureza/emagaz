import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert, AsyncStorage, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { logout } from '../../store/user/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesome, Icon } from '@expo/vector-icons';

class LogoutScreen extends Component {
    
    constructor(){
        super()
    }
    componentDidMount(){
        console.log(this.props);
        
    }

    onLogout() {
        this.props.logout()
      }

    render(){
        // const {navigation} = this.props
        return(
            <View>

                 <FontAwesome name= "sign-out" size={25} onPress={ () => Alert.alert(
                    'Are You Sure Want To Log Out?',
                    '',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => this.onLogout() },
                    ],
                    { cancelable: false }
                  ) }  >
                   <Text style={styles.red}>Sign Out</Text>
                  </FontAwesome>
                 
                        
            </View>    
        )
    }
}
const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 15,
    },
    red: {
      color: 'red',
      fontSize: 15,
    },
  });
const mapDispatchToProps = (dispatch) => bindActionCreators({
    logout
  }, dispatch)
  
export default connect(null, mapDispatchToProps)(LogoutScreen);
