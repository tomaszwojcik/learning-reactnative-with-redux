import { Component } from "react";
import { Button, Dimensions, Text, View , TextInput} from "react-native";
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import React from "react";
import { loginUser } from '../actions/index';

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

    onSyncLoginPressed = () => {
        this.props.loginUser(this.state.email, this.state.password);
        if (this.props.loggedIn) {
            this.navigateToDetails();
        }
    };

    render() {
        return (
            <View>
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
                <Button
                    title='Async Login'
                    onPress={() => console.log('NOT YET IMPLEMENTED')}
                />
                <Button
                    title='Sync Login'
                    onPress={this.onSyncLoginPressed}
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
        loginUser: (email, password) => dispatch(loginUser(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);