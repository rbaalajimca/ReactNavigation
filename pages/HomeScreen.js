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

import MapView from 'react-native-maps';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class HomeScreen extends Component{
    static navigationOptions = {
        title: "Booking Confirmed"
        }
    // goBack() {
    //     this.props.navigation.goBack();
    // }

    onTrackButton=() =>{  

        this.props.navigation.navigate("Maps");

        <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      }


    render() {

        const tableData = [
            ['Account number\n8500011223', 'Booked on\nMonday, 06 Feb'],
            ['Service Type\nAnnual service Visit', 'WR Number\n549633447'],
            ['Appointment Time\n10:30 AM', 'Engineer Name\nMr.John'],
            
          ];

		return(
            
			<View style={styles.container1}>
            <View style={styles.container}>
            <Text style={styles.titleText}>Thank you</Text>  
            <Text style={styles.titleText}>Your booking is completed</Text>  
            </View>

            <View>
            <Table style={styles.table} borderStyle={{borderWidth: 0, borderColor: '#c8e1ff'}}>
             
          <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
        </Table>
        </View> 

            <Image  style={{width:150, height: 95}}
          	source={require('../images/cheekybugger.png')}/>
	        <TouchableOpacity  onPress={this.onTrackButton} style={styles.button}>
           <Text style={styles.buttonText}>Track Engineer Location</Text>
            </TouchableOpacity>   
			</View>
           
			)
	}

}

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#81BEF7',
      borderRadius: 10,
      paddingBottom:35,      
      paddingHorizontal:35,
      marginBottom:10,
      marginTop:10
     
    },

    table: { width: 360 },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { textAlign: 'center',marginTop: 10,marginBottom: 10,},

    informationContainer:{
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
      },

      NormalText: {
        fontSize: 20,
        fontWeight: 'normal',
        
      },

    container1 : {
        
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',    
       
      },
  
    signupTextCont : {
     
        paddingVertical:16,
        flexDirection:'row'
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
       borderRadius: 0,
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
