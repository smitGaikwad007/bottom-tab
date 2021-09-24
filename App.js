import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


import TransactionScreen from './screens/BookTransaction';
import SearchScreen from './screens/SearchScreen';


export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  'instagram' : {screen : TransactionScreen},
  facebook : {screen : SearchScreen}
})

const AppContainer  = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
