import actionTypes from '../constants/authConstants';

export const initialState = {
    user: {}
};

export default function authReducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case actionTypes.AUTH_USER_LOGGED_IN:
            return Object.assign({}, state, {
                user: payload
            });

        default:
            return state;

    }
}