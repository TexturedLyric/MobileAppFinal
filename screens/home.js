import React from 'react';
import { StyleSheet, Text, ScrollView, View, Linking } from 'react-native';
import styles from '../styles.js'
import Countdown from '../components/countdown';
import { SocialIcon } from 'react-native-elements';
import TeamScreen from '../components/firebase'

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={'./assets/homeIcon.jpg'}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

    render() {
      return (
        <ScrollView >
        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
          EDISGCON Countdown
        </Text>
        <Countdown />
        <TeamScreen/>
        <View style={{flex: 3, flexDirection: 'row'}}> 
          <SocialIcon onPress={ ()=>{ Linking.openURL('https://twitter.com/edsigcon')}} type='twitter' />
          <SocialIcon onPress={ ()=>{ Linking.openURL('https://www.facebook.com/groups/edsig/')}} type='facebook' />
          <SocialIcon onPress={ ()=>{ Linking.openURL('https://www.linkedin.com/groups/8655139/')}} type='linkedin' />
        </View>
      </ScrollView>
      );
    }
  }
    
    export default Home;