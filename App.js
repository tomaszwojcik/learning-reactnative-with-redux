/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/app/configureStore';
import LoginScreen from './src/app/screens/LoginScreen';
import HomeScreen from './src/app/screens/HomeScreen';

const store = configureStore();

Navigation.registerComponentWithRedux('simple-app.Login', () => LoginScreen, Provider, store);
Navigation.registerComponentWithRedux('simple-app.Home', () => HomeScreen, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'simple-app.Login'
            }
        }
    })
});
