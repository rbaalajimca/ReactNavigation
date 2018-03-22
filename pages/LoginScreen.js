import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity,Keyboard 
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import ValidationComponent from 'react-native-form-validator';

export default class LoginScreen extends Component{
  state = {
    username: null,
    password: null
  }

  onPressLoginButton=() =>{  
    const { username, password } = this.state;      
    Keyboard.dismiss();  

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    });

    this.props.navigation.dispatch(resetAction);

    
  }


  signup() {
    //this.props.navigation.navigate("RegisterScreen");
    }

    static navigationOptions = {
       title: "Log in to your account"
       }

       render()
      {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

            

            <TextInput style={styles.inputBox} 
            
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor = "#FFFFFF"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText={username => this.setState({ username })}
            onSubmitEditing={()=> this.password.focus()}
            />
        <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Password"
            secureTextEntry={true}
            onSubmitEditing={()=> this.password.focus()}
            onChangeText={password => this.setState({ password })}
            placeholderTextColor = "#FFFFFF"
            ref={(input) => this.password = input}
            />
         <TouchableOpacity  onPress={this.onPressLoginButton} style={styles.button}>
           <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>    

          	<View style={styles.signupTextCont}>
					  <Text style={styles.signupText}>Don't have an account yet?</Text>
					  <TouchableOpacity onPress={()=>this.props.navigation.navigate("RegisterScreen")}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				    </View>
            </View>
            )
      }

    }

    const styles = StyleSheet.create({
      container : {
        backgroundColor:'#F9F9F9',
        alignItems:'center',
        justifyContent :'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      signupTextCont : {
        
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
      },
      signupText: {
        color:'#455a64',
        fontSize:16
      },
      signupButton: {
       
        color:'#455a64',
        fontSize:16,
        fontWeight:'500'
      },

      inputBox: {
        width:300,
        height:35,
        backgroundColor:'#757575',
        borderRadius: 0,
        paddingHorizontal:16,
        fontSize:16,
        color:'#FFFFFF',
        marginVertical: 10
      },
      button: {
        width:300,
        backgroundColor:'#D3F703',
          borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#333F48',
        textAlign:'center'
      }
    });