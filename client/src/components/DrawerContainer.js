import React from 'react'
import { StyleSheet, Text, View, Image, Alert, AsyncStorage, Avatar } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

    onLogout() {
        AsyncStorage.removeItem('token')
        this.props.navigation.navigate('Login')
        
      }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
           <Text
          onPress={() => navigation.navigate('screen1')}
          style={styles.uglyDrawerItem}>
            {/* <Avatar
            size="small"
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            /> */}
            Screen 1
            </Text>
     
        <Text
          onPress={() => navigation.navigate('screen2')}
          style={styles.uglyDrawerItem}>
          Screen 2
        </Text>
        <Text
          onPress={() => navigation.navigate('screen3')}
          style={styles.uglyDrawerItem}>
          Screen 3
        </Text>
        <Text
           onPress={() =>   Alert.alert(
            'Are You Sure Want To Log Out?',
            '',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.onLogout() },
            ],
            { cancelable: false }
          ) }
          style={styles.uglyDrawerItem}>
          Logout 
        </Text>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  }
})