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
    state = {
        orientation: Dimensions.get('window').height > Dimensions.get('window').width ? 'portrait' : 'landscape'
    };

    constructor(props) {
        super(props);
        console.log(this.state.orientation);
    }

    updateOrientation = () => {
        let { height, width } = Dimensions.get('window');
        if (height > width) {
            this.setState({
                orientation: 'portrait'
            });

        } else {
            this.setState({
                orientation: 'landscape'
            });
        }

        console.log(this.state.orientation);
    };

    addDimensionListener = () => {
        Dimensions.addEventListener('change', this.onDimensionsChange);
    };

    removeDimensionListener = () => {
        Dimensions.removeEventListener('change', this.onDimensionsChange);
    };

    onDimensionsChange = (dims) => {
        this.updateOrientation();
    };

    render() {
        return <View>
            <Text>Orientation: {this.state.orientation}</Text>
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
}

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