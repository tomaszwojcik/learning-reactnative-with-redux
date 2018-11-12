import * as ActionType from './ActionTypes';
import { Navigation } from 'react-native-navigation';

export const loginUser = (email, password) => {
    // *** FOLLOWING CODE IS A SIMPLE SYNC LOGIN ***
    // if (email === 'user@domain.com' && password === 'secret') {
    //     return {
    //         type: ActionType.LOGIN_SUCCESS
    //     };
    // } else {
    //     return {
    //         type: ActionType.LOGIN_FAILED
    //     };
    // }

    return (dispatch) => {
        dispatch({ type: ActionType.LOGIN_STARTED_REQUEST });
        fetch(
            'https://reqres.in/api/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        )
        .then(response => {
            response.json()
            .then(data => ({
                status: response.status,
                ...data,
            }))
            .then(json => {
                if (response.ok) {
                    dispatch({
                        type: ActionType.LOGIN_SUCCESS,
                        token: json.token
                    });

                    navigateToHomeScreen();
                } else {
                    dispatch({
                        type: ActionType.LOGIN_FAILED,
                        error: json.error
                    });
                }
            });
        })
    };
};

const navigateToHomeScreen = () => {
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
};