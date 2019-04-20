import React from "react";
import { View, Text, Button } from "react-native";
import Home from './screens/home';
import Faqs from './screens/faqs';
import Calender from './screens/calender';
import Pictures from './screens/pictures';
import { createMaterialTopTabNavigator, createAppContainer,} from 'react-navigation';


const TabNavigator = createMaterialTopTabNavigator({
  Home: Home,
  Calender: Calender,
  Pictures: Pictures,
  Faqs: Faqs,
});

export default createAppContainer(TabNavigator);