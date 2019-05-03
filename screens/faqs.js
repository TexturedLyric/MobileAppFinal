import React, { Component } from 'react';
import { StyleSheet, Text,ScrollView, View, SafeAreaView } from 'react-native';
import CardView from 'react-native-cardview';

 export default class Faqs extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View flexDirection="row">
          <CardView
              cardElevation={1}
              cardMaxElevation={1}
              cornerRadius={5}
              style={styles.card}
            >
              <Text style={styles.text}>Where?</Text>
              <Text style={styles.text}>24 Public Square, Clevland, Ohio 44113</Text>
            </CardView>
            <CardView
              cardElevation={1}
              cardMaxElevation={1}
              cornerRadius={5}
              style={styles.card}
            >
              <Text style={styles.text}>What Time?</Text>
              <Text style={styles.text}>6pm on wednesday to 12 pm on Saturday</Text>
            </CardView>
          </View>
          <View flexDirection="row">
            <CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}
              style={styles.card}
            >
              <Text style={styles.text}>What Days?</Text>
              <Text style={styles.text}>Nov.6th - Nov. 9th</Text>
            </CardView>
            <CardView
              cardElevation={3}
              cardMaxElevation={3}
              cornerRadius={5}
              style={styles.card}
            >
              <Text style={styles.text}>Who all is involved in the creation of Edsigcon?</Text>
              <Text style={styles.text}>Currently 20 people including the amazing Dr. Babb are helping run this </Text>
            </CardView>
          </View>
          <View flexDirection="row">
            <CardView
              cardElevation={4}
              cardMaxElevation={4}
              cornerRadius={5}
              style={styles.card}
            >
              <Text style={styles.text}>What are the prices?</Text>
              <Text style={styles.text}>Prices will range from $600 - $2000 depending on how involded you want to be and if you want to be provided food</Text>
            </CardView>
            <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={styles.card}
            >
              <Text style={styles.text}>What companies are backing this conference?</Text>
              <Text style={styles.text}>IMB, McGraw Hill Ed, PEGA, Cengage, and many more!</Text>
            </CardView>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1
    // backgroundColor: '#EEEEEE',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    margin: 10
  },
  text: {
    textAlign: 'center',
    margin: 10,
    height: 75
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
}
);