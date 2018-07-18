import React, { Component } from 'react'
import { ScrollView, Dimensions,  AppRegistry,
  StyleSheet,
  Text,
  View, Image, ImageBackground } from 'react-native';
import HTML from 'react-native-render-html';
import Swiper from 'react-native-swiper';
import ActionButtonScreen from './ActionButtonScreen'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomDrawer from './BottomDrawer'

// const htmlContent = `
//     <h1>This HTML snippet is now rendered with native components !</h1>
//     <h2>Enjoy a webview-free and blazing fast application</h2>
//     <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
//     <em style="textAlign: center;">Look at how happy this native cat is</em>
// `;

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>

      <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    </View>
  )
}

class ArticleScreen extends Component{
  constructor(){
    super()
    this.state={
      data: '',
      loading: false
    }
  }

  render () {
    const { navigation } = this.props;
    const article = navigation.getParam('article', 'NO-ARTICLE');
    return (
        // <ScrollView style={{ flex: 1 }}>
        <Swiper
          style={styles.wrapper}
          renderPagination={renderPagination}
          loop={false}
          showsButtons
        >
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <ImageBackground style={styles.image} source={{uri: 'https://wallpaper-house.com/data/out/5/wallpaper2you_64274.jpg'}}
            >
             <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <BottomDrawer />
            </ImageBackground>
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image style={styles.image} source={{uri: 'http://1.bp.blogspot.com/-Hai0IN_KOWU/VQhN2RtdzgI/AAAAAAAAEvc/L3lPpKfDsJo/s1600/2817771%2BBeautiful%2BEarly%2BSpring%2BLandscape%2BHD%2BWallpaperz%2B1920001.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image style={styles.image} source={{uri: 'https://i.ytimg.com/vi/aGQitt_GkqI/maxresdefault.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image style={styles.image} source={{uri: 'https://wallpaper-house.com/data/out/5/wallpaper2you_45815.jpg'}} />
          </View>
        </Swiper>
        //     <HTML html={article} imagesMaxWidth={Dimensions.get('window').width} />
        // </ScrollView>
    );
}
 

}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
  // resizeMode: 'stretch',
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  
});


export default ArticleScreen