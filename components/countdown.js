import React, { Component } from 'react';
import { View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalDuration: '',
    };
  }
  //this code was takenfrom https://www.npmjs.com/package/react-native-countdown-component
  componentDidMount() {
    var that = this;
    var date = moment()
      .utcOffset('-05:00')
      .format('YYYY-MM-DD hh:mm:ss');
    
    var expirydate = '2019-11-06 21:00:00';
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;

    that.setState({ totalDuration: d });
  }
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
    console.log(this.state.totalDuration);
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          timetoShow={['H', 'M', 'S']}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
      </View>
    );
  }
}
