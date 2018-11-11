import { Component } from "react";
import { Button, Dimensions, Text, View } from "react-native";
import { Navigation } from 'react-native-navigation';
import React from "react";

class HomeScreen extends Component {
    state = {
        orientation: Dimensions.get('window').height > Dimensions.get('window').width ? 'portrait' : 'landscape'
    };

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
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

    componentDidAppear = () => {
        Dimensions.addEventListener('change', this.onDimensionsChange);
    };

    componendDidDisappear = () => {
        Dimensions.removeEventListener('change', this.onDimensionsChange);
    };

    onDimensionsChange = (dims) => {
        this.updateOrientation();
    };

    navigateToDetails = () => {
      Navigation.push(this.props.componentId, {
          component: {
              name: 'simple-app.Details'
          }
      });
    };

    render() {
        return (
            <View>
                <Text>Orientation: {this.state.orientation}</Text>
                <Button
                    title='Go to Details'
                    onPress={this.navigateToDetails}
                />
            </View>
        )
    };
}

export default HomeScreen;