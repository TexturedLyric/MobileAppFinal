import React, { Component } from 'react';
import { StyleSheet, Text,Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

 export default class Pictures extends React.Component {
  render() {
    return (
      <ScrollView>
        <Card
          title='One Good Boy'
          image={{uri: 'https://picsum.photos/id/237/200/300'}}>
          <Text style={{marginBottom: 10}}>
            This is God's Favorite puppers.
          </Text>
        </Card>
        <Card
          title='Holy Hill'
          image={{uri: 'https://picsum.photos/id/1000/5626/3635'}}>
          <Text style={{marginBottom: 10}}>
            Snow covered hill with a cross
          </Text>
        </Card>
        <Card
          title='Islands'
          image={{uri: 'https://picsum.photos/id/1002/4312/2868'}}>
          <Text style={{marginBottom: 10}}>
            Islands from an eagle-eye view
          </Text>
        </Card>
        <Card
          title='Rivers'
          image={{uri: 'https://picsum.photos/id/1015/6000/4000'}}>
          <Text style={{marginBottom: 10}}>
            Great view of a river.
          </Text>
        </Card>
        <Card
          title='Aurora borealis'
          image={{uri: 'https://picsum.photos/id/1022/6000/3376'}}>
          <Text style={{marginBottom: 10}}>
            A view of the northern skies.
          </Text>
        </Card>
        <Card
          title='Bird'
          image={{uri: 'https://picsum.photos/id/1024/1920/1280'}}>
          <Text style={{marginBottom: 10}}>
            This boy will munch you.
          </Text>
        </Card>
        </ScrollView>
    );
  }
}
