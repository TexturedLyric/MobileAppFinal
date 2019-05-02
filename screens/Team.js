import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

let collaborators = [];

export default class Team extends React.Component {

  constructor(props)
  {
    super(props);

    var config = {
      //expo allows for secrets and keys access: https://docs.expo.io/versions/latest/workflow/configuration/
        apiKey: "AIzaSyC39fh8pYIVv5maDWNaDZkUR3nFbC0mz5o",
        authDomain: "thisone-a46a9.firebaseapp.com",
        databaseURL: "https://thisone-a46a9.firebaseio.com",
        projectId: "thisone-a46a9",
        storageBucket: "thisone-a46a9.appspot.com",
        messagingSenderId: "390258913747",
        appId: "1:390258913747:web:8929233d69b39b74"
    };

    //ensure that no more than one firebase is instantiated
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    this.state = {
      Collaborators: [],
      db: firebase.firestore()
    }

    this.HandleDatabaseRead = this.HandleDatabaseRead.bind(this);
    this.GetAllCollaborators = this.GetAllCollaborators.bind(this);

  }

  GetAllCollaborators(Name){
    let colRef = this.state.db.collection("Collaborators");

    colRef.get()
             .then( (querySnapshot) => {
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
             .then(() => {this.setState({Collaborators: collaborators})})
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead(data){
    const Collaborators = [];


    data.forEach( (doc) => {

      //destructure data
      const { Name, School } = doc.data();

      let listCol = {
        key: doc.id,
        Name: Name,
        School: School
      }

      collaborators.push (listCol);
    });

    console.log(Collaborators);
    this.setState(
      {
        Collaborators: Collaborators
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllCollaborators("Name");
  }  

  render() {
    return (
      <View>
        <Text>Collaborators</Text>
        <FlatList data={this.state.Collaborators}
                  renderItem={({item}) => <Text>{item.Name}</Text>} 
                  keyExtractor={item => item.key}
        />
      </View>
    );
  }
}