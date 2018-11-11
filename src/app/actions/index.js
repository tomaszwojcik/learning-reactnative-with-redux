export const performLogin = (email, password) => {
    return {
        type: 'PERFORM_LOGIN',
        email: email,
        password: password
    }
}