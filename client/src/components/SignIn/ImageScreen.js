import React, { Component } from 'react'
import Loading from '../Loading'
import ShareMedsos from './ShareMedsos'
import { View, Text, Image, StyleSheet,ScrollView, KeyboardAvoidingView, TextInput, Button, ActivityIndicator, 
  AsyncStorage, Dimensions, TouchableOpacity,TouchableHighlight} from 'react-native'
// import { getImage } from '../../store/user/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, ListItem, Icon } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'
import axios from 'axios'
import CardView from 'react-native-cardview'

const deviceWidth = Dimensions.get('window').width;

class ImageScreen extends Component{
    constructor(){
        super()
        this.state={
          data: [],
          loading: false
        }
    }

    componentDidMount () {
      console.log('DID MOUNT IMAGEEEEEEEEE');
      
      this.getImage()
  
    }

    getImage = () => {
    
        AsyncStorage.getItem('token')
          .then(res => {
            this.setState({
              loading: true
            })
            console.log('INI LOADING DI IMAGE'+this.state.loading);
            
            if (res !== null) {
              console.log('AFTER CEK ASYNC DI IMAGE');
              
         
               axios.get(`http://172.16.13.170:3000/images`, {
              //  axios.get(`http://172.16.13.169:3000/images`, {
          
                headers: { token: res },
              })
                .then((response) => {
                  console.log('RESPONSE DI IMAGEEEEEEEE'+response.data.data);
                  this.setState({
                    data: response.data.data,
                    loading : false
                  })
                })
                .catch((err) => {
                  console.log('error image'+err);
                })
            } else {
              console.log('NO TOKEN NO PARTY');
              
            }
          })
          .catch(err => reject(err));
    
    }
  
  

   
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;
     
      return {
        title: params ? params.otherParam : 'Big Title',
        drawerLabel: 'Example',
        headerLeft:  
        <View style={{paddingLeft:16}}>
        <Icon name= "menu" onPress={ () => navigation.openDrawer() }  />
         </View>,
          
      }
    };
  
    
   render(){
    const { navigation } = this.props;
    const { params } = this.props;
   
    if(this.state.loading){
      return(
        <View>
          
            <Text>Example</Text>
          <Loading />
         </View> 
      )
    }
      else{
        return(
          <ScrollView>
     
       <View style={[styles.parent]}>
      
       {
            this.state.data.map((l, i) => (
              <TouchableOpacity  key={i} onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Article',
                {
                  article: l.article,
                }
              );
              }}>
              <Image style={styles.child}
              key={i}
              source={{ uri:l.url }}
            />
              </TouchableOpacity> 

            ))
          }
          <ShareMedsos />
      </View>
        </ScrollView>
            )
      }
        
    }
}

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'center'
},
child: {
  
    // width: '48%',
    aspectRatio: 1,
    marginBottom: 25,
    maxWidth: 150,
    minHeight: 200,
    resizeMode : 'stretch',
    margin: '2%'
}
});



const mapStateToProps = state => ({
  users: state.data
})

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   getImage
// }, dispatch)



export default connect(mapStateToProps, null)(ImageScreen);
