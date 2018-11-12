import { Component } from "react";
import { Button, Dimensions, Text, View , TextInput} from "react-native";
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import React from "react";
import { loginUser } from '../actions/index';

class LoginScreen extends Component {
    state = {
        orientation: Dimensions.get('window').height > Dimensions.get('window').width ? 'portrait' : 'landscape',
        email: '',
        password: ''
    };

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    updateOrientation = (dims) => {
        let { height, width } = dims.window;
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
        Dimensions.addEventListener('change', this.updateOrientation);
    };

    componentDidDisappear = () => {
        Dimensions.removeEventListener('change', this.updateOrientation);
    };

    navigateToDetails = () => {
      Navigation.push(this.props.componentId, {
          component: {
              name: 'simple-app.Details'
          }
      });
    };

    onLoginPressed = () => {
        this.props.loginUser(this.state.email, this.state.password);
    };

    render() {
        let errorMessage = null;
        if (this.props.error !== '') {
            errorMessage = <Text style={ { color: 'red' }}>
                { this.props.error }
            </Text>
        }

        return (
            <View style={{ marginTop: 40 }}>
                <Text>Orientation: {this.state.orientation}</Text>
                <TextInput
                    value={this.state.email}
                    placeholder='Enter your email...'
                    onChangeText={(text) => this.setState({ email: text })}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                <TextInput
                    value={this.state.password}
                    placeholder='Enter your password...'
                    onChangeText={(text) => this.setState({ password: text })}
                    secureTextEntry
                />

                { errorMessage }

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
        // ...state.auth
        // loggedIn: state.loggedIn,
        error: state.auth.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);