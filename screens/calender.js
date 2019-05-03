import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Calendar for Edsigcon</Text>
        <Calendar
          style={styles.calendar}
          current={''}
          minDate={'2012-05-10'}
          markingType={'period'}
          theme={{
            calendarBackground: '#333248',
            textSectionTitleColor: 'white',
            dayTextColor: 'red',
            todayTextColor: 'white',
            selectedDayTextColor: 'white',
            monthTextColor: 'white',
            selectedDayBackgroundColor: '#333248',
            arrowColor: 'white',
            // textDisabledColor: 'red',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            }
          }}
          markedDates={{
            '2019-11-06': {startingDay: true, color: 'blue'},
            '2019-11-07': {color: 'grey'},
            '2019-11-08': {color: 'grey'},
            '2019-11-09': {endingDay: true, color: 'blue'}}}
          hideArrows={false}
        />
        <Text style={{ alignItems: 'center', fontSize: 30, textDecorationLine: "underline" }}>
            Event Times Planned:
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 25 }}>
            Wednesday, November 6th:
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 15 }}>
            - 6:00pm Light Reception - Registration
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 25 }}>
            Thursday, November 7th:
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 15 }}>
            - 7:00am - 4:30p Registration{"\n"}
            - 7:30am Breakfast{"\n"}
            - 8:30am - 12:00pm Sessions and Workshops begin{"\n"}
            - 12:00pm Industry Keynote Lunch{"\n"}
            - 2:00pm - 4:30 Sessions{"\n"}
            - Fun night on the town TBD
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 25 }}>
            Friday, November 8th:
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 15 }}>
            - 7:30am Breakfast{"\n"}
            - 8:30am-12:00pm Sessions{"\n"}
            - 12:00pm Distinguished Educator Keynote Lunch{"\n"}
            - 2:00pm - 4:30 Sessions{"\n"}
            - 5:00pm EDSIG Members Meeting{"\n"}
            - 6:30pm Reception
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 25 }}>
            Saturday, November 9th:
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 15 }}>
            - 7:30am Breakfast{"\n"}
            - 8:30am - 12:00pm Sessions{"\n"}
            - 12:00pm Awards Lunch
        </Text>
      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#fffff',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#fffff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fffff'
  }
});