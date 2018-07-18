import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Constants, Video, ScreenOrientation } from 'expo'
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import VideoPlayer from '@expo/videoplayer';

export default class VideoScreen extends React.Component {
  state = {
    shouldPlay: true,
    portraitStatus : true,
  }
  
  onLayout() {
    const {width, height} = Dimensions.get('window')
    if(width > height){
      this.setState({
        portraitStatus : false
      })
    }
    else {
      this.setState({
        portraitStatus : true
      })
    }
  }

  handlePlayAndPause = () => {  
    this.setState((prevState) => ({
       shouldPlay: !prevState.shouldPlay  
    })
    );
  }
  
  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,  
    }));
  }
    render() {
      const { width } = Dimensions.get('window');
        
      return (
        <View style={styles.container}>
        <View onLayout={this.onLayout.bind(this)}>
        <VideoPlayer
            videoProps={{  shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: { uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
              isMuted: this.state.mute}}
              isPortrait={this.state.portraitStatus}
              playFromPositionMillis={0}
            playFromPositionMillis={0}
            switchToLandscape={()=>ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE)}
            switchToPortrait={()=>ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)}
            />
           
             <View style={styles.controlBar}>
            <MaterialIcons 
              name={this.state.mute ? "volume-mute" : "volume-up"}
              size={45} 
              color="white" 
              onPress={this.handleVolume} 
            />
          
          </View>
          </View>
      </View>
  
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    controlBar: {
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }
  });