/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, NavigationEvents } from 'react-navigation';

import HomeScreen from './src/app/screens/HomeScreen';
import DetailsScreen from './src/app/screens/DetailsScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: 'Home'
    }
);

export default class App extends Component {
    render() {
        return <RootStack />;
    }
}