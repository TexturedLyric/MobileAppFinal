import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles.js'
import {MapView} from 'expo';


class Maps extends React.Component{
    state ={}
    
    componentWillMount() {}
    
        render(){
        return(
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 41.4986,
                    longitude: -81.6945,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
          />
        
          
        )
        
        }
        
    }
    
    export default Maps;
    