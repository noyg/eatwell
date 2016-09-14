import actionTypes from '../constants/authConstants';

function loggedIn(user) {
    return {
        type: actionTypes.AUTH_USER_LOGGED_IN,
        payload: user
    }
}


export function login(credentials) {
    return (dispatch) => {
        $.ajax({
            url: `/auth/sign_in`,
            type: 'POST',
            data: credentials,
        }).done((response) => {
            console.log('response', response);
            // dispatch(loggedIn(response));
        }).fail((response) => {
            console.log('response', response);
            // dispatch(loggedIn(response));
        });
    }
}