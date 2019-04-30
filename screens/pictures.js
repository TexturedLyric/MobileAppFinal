import React, { Component } from 'react';
import { StyleSheet, Text,Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

 export default class Pictures extends React.Component {
  render() {
    return (
      <ScrollView>
        <Card
          image={{uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/59039454_10157911566259714_5036926886408617984_n.jpg?_nc_cat=106&_nc_ht=scontent-dfw5-1.xx&oh=f9b453b3689f141bed5625694ed5eb1e&oe=5D317455'}}>
        </Card>
        <Card
          image={{uri: 'https://picsum.photos/id/1002/4312/2868'}}>
        </Card>
        <Card
          image={{uri: 'https://picsum.photos/id/1002/4312/2868'}}>
        </Card>
        <Card
        image={{uri: 'https://picsum.photos/id/1015/6000/4000'}}>
        </Card>
        <Card
          image={{uri: 'https://picsum.photos/id/1022/6000/3376'}}>
        </Card>
        <Card
          image={{uri: 'https://picsum.photos/id/1024/1920/1280'}}>
        </Card>
        </ScrollView>
    );
  }
}
