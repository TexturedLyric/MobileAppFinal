import React from 'react';
import { StyleSheet, Text, ScrollView, View, Linking } from 'react-native';
import styles from '../styles.js'
import Countdown from '../components/countdown';
import { SocialIcon } from 'react-native-elements';

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
        <ScrollView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
          EDISGCON Countdown</Text>
        <Countdown />
        <View style={{flex: 3, flexDirection: 'row'}}>
          <SocialIcon onPress={ ()=>{ Linking.openURL('https://google.com')}} type='twitter' />
          <SocialIcon type='facebook' />
          <SocialIcon type='instagram' />
          <SocialIcon type='linkedin' />
        </View>
      </ScrollView>
      );
    }
  }
    
    export default Home;