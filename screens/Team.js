import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card} from 'react-native-elements'
import * as firebase from 'firebase';
import 'firebase/firestore';

let collaborators = [];

export default class Team extends React.Component {

  constructor(props)
  {
    super(props);

    
    var config = {
      apiKey: "AIzaSyDffGCZRShzCsW-SkOVAP6aPOAPy4Gx_-U",
      authDomain: "mobilefinal-15268.firebaseapp.com",
      databaseURL: "https://mobilefinal-15268.firebaseio.com",
      projectId: "mobilefinal-15268",
      storageBucket: "mobilefinal-15268.appspot.com",
      messagingSenderId: "298349171585", 
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
    let colRef = this.state.db.collection("speakers");

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
      const { Name, School,Bio } = doc.data();

      let listCol = {
        key: doc.id,
        Name: Name,
        School: School,
        Bio: Bio
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
                  renderItem={({item}) => <Card title={item.Name}><Text>{item.School}</Text><Text>{item.Bio}</Text></Card>} 
                  keyExtractor={item => item.key}
        />
      </View>
    );
  }
}