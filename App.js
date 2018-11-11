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
import HomeScreen from './src/app/screens/HomeScreen';
import DetailsScreen from './src/app/screens/DetailsScreen';

const store = configureStore();
console.log('!!!!!!!!!!')
console.log(store)
console.log('!!!!!!!!!!')

Navigation.registerComponentWithRedux('simple-app.Home', () => HomeScreen, Provider, store);
Navigation.registerComponentWithRedux('simple-app.Details', () => DetailsScreen, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                options: {
                    topBar: {
                        visible: true
                    }
                },
                children: [
                    {
                        component: {
                            name: 'simple-app.Home',
                        }
                    }
                ]
            }
        }
    });
});
