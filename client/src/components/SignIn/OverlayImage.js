import React, { Component } from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity, ImageBackground } from 'react-native';

export default class OverlayImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri:"https://preview.ibb.co/e883Jw/2010_brown_bear.jpg" }}
          style={ styles.imageWrapper }>
          <TouchableOpacity 
            style={ styles.button } 
            onPress={ () => { alert("handler here") }}>
            <Text style={ styles.text }>×</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 64,
    backgroundColor: '#ecf0f1',
  },
  imageWrapper:{
     width:200,
     height:300,
     borderRadius:20 
  },
  button:{
    width:30,
    height:30,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    borderRadius:20,
    position:'absolute',
    left:20,
    top:20
  },
  text:{
    fontSize:40,
    color:'white',
    lineHeight:42
  }
});