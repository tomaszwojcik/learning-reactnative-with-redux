/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeScreen from './src/app/screens/HomeScreen';
import DetailsScreen from './src/app/screens/DetailsScreen';

import reducers from './src/app/reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <Text>Test</Text>
                {/*<RootStack />;*/}
            </Provider>
        );
    }
}