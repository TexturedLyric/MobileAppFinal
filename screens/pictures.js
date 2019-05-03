import React, { Component } from 'react';
import { StyleSheet, Text,Image, ScrollView } from 'react-native';
import { Card} from 'react-native-elements'

 export default class Pictures extends React.Component {
  render() {
    return (
      <ScrollView>
        <Card
          image={{uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/59039454_10157911566259714_5036926886408617984_n.jpg?_nc_cat=106&_nc_ht=scontent-dfw5-1.xx&oh=f9b453b3689f141bed5625694ed5eb1e&oe=5D317455'}}>
        </Card>
        <Card
          image={{uri: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/51392682_10216124814406610_6881371755265392640_o.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-2.xx&oh=8d40f54cbc55dc7eafea66e989de3533&oe=5D29C2AC'}}>
        </Card>
        <Card
          image={{uri: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/23172885_10212036496045343_7225074834079658157_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-2.xx&oh=8b9ac69b9ecf25f7a00fcf39d8fa5c3a&oe=5D324976'}}>
        </Card>
        <Card
        image={{uri: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/23435165_10212034691400228_309417014973683626_n.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-2.xx&oh=95ac52e05654fa28aa64e01182c09110&oe=5D71AE9A'}}>
        </Card>
        <Card
          image={{uri: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/14963374_10100267067771193_8726937179476493123_n.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-2.xx&oh=3fc7644a2b382ece52c971482888ff6b&oe=5D6BC3EC'}}>
        </Card>
        <Card
          image={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXAtJdOISiA7kFI_6cHz7gJgy1cJXfA_4zgIPT_ZILeOaLJX2'}}>
        </Card>
        </ScrollView>
    );
  }
}
