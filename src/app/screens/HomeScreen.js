import { Component } from "react";
import { Text, View, Button } from "react-native";
import React from "react";
import { Navigation } from 'react-native-navigation';

class HomeScreen extends Component {
    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: 'Hey'
                },
                rightButtons: [
                    {
                        id: 'buttonOne',
                        text: 'One'
                    }
                ],
            }
        };
    }

    render() {
        return <View>
            <Text>Details screen</Text>
            <Button
                title='Dismiss'
                onPress={() => Navigation.pop(this.props.componentId) }
            />
        </View>
    }
}

export default HomeScreen;