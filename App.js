/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends Component {
    render() {
        return <View>
            <Text>Home screen</Text>
            <Button
                title='Go to Details'
                onPress={() => this.props.navigation.navigate('Details')}
            />
        </View>
    };
};

class DetailsScreen extends Component {
    render() {
        return <View>
            <Text>Details screen</Text>
        </View>
    }
}

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