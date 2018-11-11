function login(previousState = {}, action) {
    switch (action.type) {
        case 'PERFORM_LOGIN':
            return {
                ...previousState,
                loggedIn: true
            };

        default:
            return previousState;
    }
}

export default login;