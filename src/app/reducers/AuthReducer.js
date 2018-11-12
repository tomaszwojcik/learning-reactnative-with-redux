import * as ActionType from '../actions/ActionTypes';

const INITIAL_STATE = {
    error: '',
    loginState: 'in_progress',
    failedLoginCount: 0
}


function authReducer(previousState = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            return {
                ...previousState,
                loginState: 'success',
                error: ''
            };

        case ActionType.LOGIN_FAILED:
            return {
                ...previousState,
                failedLoginCount: (previousState.failedLoginCount || 0) + 1,
                loginState: 'failed',
                error: action.error
            };

        case ActionType.LOGIN_STARTED_REQUEST:
            return {
                ...previousState,
                loginState: 'in_progress',
                error: ''
            };

        default:
            return previousState;
    }
}

export default authReducer;