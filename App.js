import React from 'react';
import Home from './screens/home.js'
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles.js'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }
}