import * as ActionType from '../actions/ActionTypes';

function authReducer(previousState = {}, action) {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            return {
                ...previousState,
                loggedIn: true
            };

        case ActionType.LOGIN_FAILED:
            return {
                ...previousState,
                failedLoginCount: (previousState.failedLoginCount || 0) + 1
            };

        default:
            return previousState;
    }
}

export default authReducer;