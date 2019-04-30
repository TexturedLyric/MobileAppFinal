import React from 'react';
import * as firebase from 'firebase';
import "@firebase/firestore";
import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View,} from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

//change thsi shit
var firebaseConfig = {
    apiKey: "AIzaSyDffGCZRShzCsW-SkOVAP6aPOAPy4Gx_-U",
    authDomain: "mobilefinal-15268.firebaseapp.com",
    databaseURL: "https://mobilefinal-15268.firebaseio.com",
    projectId: "mobilefinal-15268",
    storageBucket: "mobilefinal-15268.appspot.com",
    messagingSenderId: "298349171585"
  };

firebase.initializeApp(firebaseConfig);

var cards = [];

getMembers();
async function getMembers() {
  const mainData = await firebase.firestore().collection("members").get();
  var relData = mainData.docs.map(doc => doc.data());

  for (var i = 0; i < relData.length; i++) {
    //cards.push(<Card><Avatar rounded icon={{name: 'user', type: 'font-awesome'}} /><Text h3 style={{color:'dodgerblue'}}>{relData[i].Name}</Text><Text>{relData[i].School + "\n\n" + relData[i].Role}</Text></Card>)
    cards.push(<Card><Text h3 style={{color:'dodgerblue'}}>{relData[i].Name}</Text><Text style={{fontWeight:'bold'}}>{relData[i].School + "\n"}</Text><Text>{relData[i].Role}</Text></Card>)
  }
}


export default class TeamScreen extends React.Component {
    static navigationOptions = {
      title: 'Team',
    };
  
    render() {
      return(
        <View>
          {cards}
        </View>
      )
    }
  }
  