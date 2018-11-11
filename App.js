/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/app/screens/HomeScreen';
import DetailsScreen from './src/app/screens/DetailsScreen';

import reducers from './src/app/reducers';

Navigation.registerComponent('simple-app.Home', () => HomeScreen);
Navigation.registerComponent('simple-app.Details', () => DetailsScreen);

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
                            name: 'simple-app.Home'
                        }
                    }
                ]
            }
        }
    });
});

// const RootStack = createStackNavigator(
//     {
//         Home: HomeScreen,
//         Details: DetailsScreen
//     },
//     {
//         initialRouteName: 'Home'
//     }
// );


//
// export default class App extends Component {
//     render() {
//         return (
//             <Provider store={createStore(reducers)}>
//                 <Text>Test</Text>
//                 {/*<RootStack />;*/}
//             </Provider>
//         );
//     }
