import * as ActionType from './ActionTypes';

export const loginUser = (email, password) => {
    if (email === 'user@domain.com' && password === 'secret') {
        return {
            type: ActionType.LOGIN_SUCCESS
        };
    } else {
        return {
            type: ActionType.LOGIN_FAILED
        };
    }
};
