import { Component } from "react";
import { Button, Dimensions, Text, View , TextInput} from "react-native";
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import React from "react";
import { performLogin } from '../actions/index';

class HomeScreen extends Component {
    state = {
        orientation: Dimensions.get('window').height > Dimensions.get('window').width ? 'portrait' : 'landscape',
        email: '',
        password: ''
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
        console.log(this.props.navigator);
    };

    componentDidAppear = () => {
        console.log('Component did appear');
        Dimensions.addEventListener('change', this.onDimensionsChange);
    };

    componentDidDisappear = () => {
        console.log('Component did disappear');
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

    onLoginPressed = () => {
        this.props.onLogin(this.state.email, this.state.password);
        if (this.props.loggedIn) {
            this.navigateToDetails();
        }
    }

    render() {
        return (
            <View>
                <Text>Orientation: {this.state.orientation}</Text>
                <TextInput
                    value={this.state.email}
                    placeholder='Enter your email...'
                    onChangeText={(text) => this.setState({ email: text })}
                    keyboardType='email-address'
                    autocapitalize='none'
                />
                <TextInput
                    value={this.state.password}
                    placeholder='Enter your password...'
                    onChangeText={(text) => this.setState({ password: text })}
                    secureTextEntry
                />
                <Button
                    title='Login'
                    onPress={this.onLoginPressed}
                />
            </View>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(performLogin(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);