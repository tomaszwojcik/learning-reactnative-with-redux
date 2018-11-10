import { Component } from "react";
import { Button, Dimensions, Text, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import React from "react";

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

export default HomeScreen;