import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import { View, Text, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'

class HeaderSection extends Component {
    
    constructor(){
        super()
    }
    componentDidMount(){
        console.log(this.props);
        
    }

    onLogout() {
        AsyncStorage.removeItem('token')
        this.props.navigation.navigate('Login')
        
      }

    render(){
        // const {navigation} = this.props
        return(
            <View>

                 <Header
               
                leftComponent={{ icon: 'menu', color: '#fff', 
                onPress: () => this.props.navigation.openDrawer()  }}
                centerComponent={{ text: 'Small Title', style: { color: '#fff' } }}
                rightComponent={{ icon: 'subdirectory-arrow-left', color: '#fff',
                onPress: () =>  Alert.alert(
                    'Are You Sure Want To Log Out?',
                    '',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => this.onLogout() },
                    ],
                    { cancelable: false }
                  )
                 }}
                
                />
                        
            </View>    
        )
    }
}

export default HeaderSection