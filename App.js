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

class HomeScreen extends Component {
    addDimensionListener = () => {
        console.log('Add dimension listener')
        Dimensions.addEventListener('change', this.onDimensionsChange);
    }

    removeDimensionListener = () => {
        console.log('Remove dimension listener')
        Dimensions.removeEventListener('change', this.onDimensionsChange);
    }

    onDimensionsChange = (dims) => {
        console.log('New window width ' + dims.window.width);
        console.log('New screen width ' + dims.screen.width);
    }

    render() {
        return <View>
            <Text>Home screen</Text>
            <NavigationEvents
                onWillFocus={this.addDimensionListener}
                onWillBlur={this.removeDimensionListener}
            />
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