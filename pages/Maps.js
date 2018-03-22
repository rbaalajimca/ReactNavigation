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
  Dimensions,
  TouchableOpacity,Keyboard,
  Platform,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const ASPECT_RATIO = 500 / 500;
const LATITUDE = 10.059866;
const LONGITUDE = 78.733288;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyDDecbyHWb9wrMFQJWTfF9HKv4I8-3liVM';

export default class Maps extends Component{
    static navigationOptions = {
        title: "Maps"
        }

        constructor(props) {
            super(props);
        
            // AirBnB's Office, and Apple Park
            this.state = {
              coordinates: [
                {
                  latitude: 10.059866,
                  longitude: 78.733288,
                },
                {
                  latitude: 10.159911,
                  longitude: 78.995587,
                },
              ],
            };
        
            this.mapView = null;
          }
        
          onMapPress = (e) => {
            this.setState({
              coordinates: [
                ...this.state.coordinates,
                e.nativeEvent.coordinate,
              ],
            });
          }
        
        render() {
        return(
            <View style={styles.container1}>
            
            <MapView
            
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={styles.map}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={(result) => {
              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
		
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
      map: {
        flex: 1,
        ...Platform.select({
          ios: { ...StyleSheet.absoluteFillObject },
          android: {
            flex: 1,
            // ...StyleSheet.absoluteFillObject,
            height: 500,
            width: 500,
          },
        }),
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

   