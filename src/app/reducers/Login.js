function login(previousState = {}, action) {
    switch (action.type) {
        case 'PERFORM_LOGIN':
            return {
                ...previousState,
                loggedIn: action.email === 'user@domain.com' && action.password === 'secret'
            };

        default:
            return previousState;
    }
}

export default login;