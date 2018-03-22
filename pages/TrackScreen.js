import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import ValidationComponent from 'react-native-form-validator';

export default class RegisterScreen extends Component{
    render() {
		return(
			<View style={styles.container}>
            <TextInput style={styles.inputBox} 
            
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Name"
            placeholderTextColor = "#000000"
            selectionColor="#fff"
            />
            </View>

)
}
}

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
  
    inputBox: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#000000',
      marginVertical: 10
    },
    button: {
      width:300,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
    
  });

