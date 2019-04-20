import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles.js'

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Who wants a muffin?</Text>
        </View>
      );
    }
  }
    
    export default Home;