import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert, AsyncStorage, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { logout } from '../../store/user/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesome, Icon } from '@expo/vector-icons';

class Avatar extends Component {
    
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

           <Avatar
                size="small"
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                />
                 
                        
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
  
export default connect(null, mapDispatchToProps)(Avatar);
