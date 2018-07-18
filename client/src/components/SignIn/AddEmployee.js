import React, { Component } from 'react'
import HeaderSection from './HeaderSection'
import { View, Text, Image, StyleSheet,ScrollView, TextInput, Button, KeyboardAvoidingView} from 'react-native'
import { addEmployee } from '../../store/user/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, ListItem } from 'react-native-elements'
import ValidationComponent from 'react-native-form-validator';

class AddEmployee extends ValidationComponent{
  constructor(props) {
    super(props);
    
    this.state = {
      npp: '',
      name: '',
    
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }
    addEmp(){
      this.validate({
        npp: {required: true},
        name: {required: true},
      });
      this.props.addEmployee(this.state)
    }

    focusNextField(id) {
      this.inputs[id].focus();
    }
  
    
   render(){
  
        return(
          <ScrollView>
          <KeyboardAvoidingView behavior="position">

            <TextInput
          value={this.state.npp}
          onChangeText={(npp) => this.setState({ npp })}
          placeholder={'NPP'}
          style={styles.input}
          onSubmitEditing={() => {
            this.focusNextField('name');
          }}
        />
       
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'Name'}
          style={styles.input}
          ref={ input => {
            this.inputs['name'] = input;
          }}
          onSubmitEditing={() => {
            this.addEmp()
          }}
        />
         
        
        <Button
        //  disabled={!this.state.npp || !this.state.name }
          title={'Submit'}
          style={styles.input}
          onPress={this.addEmp.bind(this)}
          ref={ input => {
            this.inputs['oto'] = input;
          }}
        />
       
       </KeyboardAvoidingView>  
       </ScrollView> 
            )
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  
});



const mapDispatchToProps = (dispatch) => bindActionCreators({
  addEmployee
}, dispatch)



export default connect(null, mapDispatchToProps)(AddEmployee);