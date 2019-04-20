import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles.js'


class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Text>Profile</Text>
        </View>
      );
    }
  }
  