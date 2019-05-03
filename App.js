import React from "react";
import { View, Text, Button } from "react-native";
import Home from './screens/home';
import Faqs from './screens/faqs';
import Calender from './screens/calender';
import Pictures from './screens/pictures';
import Team from './screens/Team';
import Maps from './screens/map';
import { createMaterialTopTabNavigator, createAppContainer,} from 'react-navigation';
import { MAP_TYPES } from "react-native-maps";


const TabNavigator = createMaterialTopTabNavigator({
  Home: Home,
  Calender: Calender,
  Pictures: Pictures,
  Team: Team,
  Faqs: Faqs,
  Map: Maps,
});

export default createAppContainer(TabNavigator);