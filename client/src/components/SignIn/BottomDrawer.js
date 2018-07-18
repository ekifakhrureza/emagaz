import React, {Component} from 'react';
import { Dimensions, FlatList,  Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'; 
import BottomUpPanel from "./BottomDrawer/index";

const {height} = Dimensions.get('window');
const DATA= ["Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component"];

class BottomDrawer extends Component {

   render = () =>
       <BottomUpPanel
                      content={this.renderBottomUpPanelContent}
                      icon={this.renderBottomUpPanelIcon}
                    //topEnd={height-height*0.8}
                      topEnd={height-height*0.9}
                      startHeight={30}
                    //   headerText={"List of items"}
                      headerTextStyle={{color:"white", 
                                       fontSize: 15}}
                      bottomUpSlideBtn={{display: 'flex',
                                       alignSelf: 'center',
                                       backgroundColor: 'black',
                                       alignItems: 'center',
                                       borderTopColor: 'grey',
                                       borderTopWidth: 5}}
        >
      </BottomUpPanel>            
               
  renderBottomUpPanelContent = () =>
          <View>
               <FlatList style={{ backgroundColor: 'black', opacity: 0.7, flex:1}}
                    data={DATA}
                    renderItem={({item}) =>
                                <Text style={{color:'white', padding:20}}>{item}</Text>
                               }
                />
          </View>
          
  renderBottomUpPanelIcon = () =>
        <Ionicons name={"ios-arrow-up"} style={{color:"white"}} size={30}/>        
          
}

export default BottomDrawer