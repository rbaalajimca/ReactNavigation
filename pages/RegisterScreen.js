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

export default class RegisterScreen extends Component{
    static navigationOptions = {
        title: "Register"
        }
    goBack() {
        this.props.navigation.goBack();
    }

    render() {
		return(
			
			<View style={styles.container}>
          
            <TextInput style={styles.inputBox} 
            
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Name"
            placeholderTextColor = "#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onSubmitEditing={()=> this.password.focus()}
            />

          <TextInput style={styles.inputBox} 
            
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />  

        <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />  

           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Register</Text>
           </TouchableOpacity>     
  		

				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={()=>  this.props.navigation.goBack()}>
          <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
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
    signupTextCont : {
      
      
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
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
