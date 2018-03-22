import React, { Component } from 'react';


import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import TimerMixin from 'react-timer-mixin';

//var TimerMixin = require('react-timer-mixin');

const timer = require('react-native-timer');

export default class SplashScreen extends Component{
    static navigationOptions = {
    //     //title: "Splash"
       }

       componentDidMount(){
        // Start counting when the page is loaded
        this.timer = setTimeout(()=>{
             // Add your logic for the transition
           
             const resetAction = NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
            });
        
            this.props.navigation.dispatch(resetAction);
            

            // this.props.navigation.navigate("LoginScreen");

        }, 3000);
   }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
   }

      render()
      {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
            <Image  style={{width:350, height: 140}}
          			source={require('../images/logo.png')}/>
          		<Text style={styles.logoText}>Welcome to British Gas.</Text>	

               <ActivityIndicator size="large" color="#0000FF" />

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
    logoText : {
        marginVertical: 25,
        fontSize:18,
        color:'#1e88e5'
    }
  });