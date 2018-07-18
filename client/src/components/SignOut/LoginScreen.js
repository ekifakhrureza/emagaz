import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, KeyboardAvoidingView} from 'react-native';
import { login } from '../../store/user/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, ListItem } from 'react-native-elements'
import ValidationComponent from 'react-native-form-validator'
import Loading from '../Loading'

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

 
  componentDidMount() {
  
  }

  
  onLogin() {
    this.validate({
      username: {required: true},
      password: {required: true},
    });

    const { username, password } = this.state;

    // Alert.alert('Credentials', `${username} + ${password}`);
  
    this.props.login(this.state)

    console.log('kuuunn'+this.props.users.data) 
    
  }

  render() {
    if(this.props.users.loading){
      return(
        <View>
          
          <Loading />
         </View> 
      )
    }
    else {
    return (

      <KeyboardAvoidingView style={styles.container}>
    
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
          onSubmitEditing={() => {
            this.focusNextField('password');
          }}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
          ref={ input => {
            this.inputs['password'] = input;
          }}
          onSubmitEditing={() => {
            this.onLogin()
          }}
        />
        
        <Button
         disabled={!this.state.username || !this.state.password }
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
          ref={ input => {
            this.inputs['oto'] = input;
          }}
        />
 
      </KeyboardAvoidingView>
    )
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

const mapStateToProps = state => ({
  users: state.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);