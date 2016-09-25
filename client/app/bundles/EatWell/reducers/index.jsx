// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/EatWell/store/ApplicationStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import {initialState as eatWellInitialState, reducer as eatWellReducer} from './eatWellReducer';
import {initialState as authInitialState, reducer as authReducer} from './authReducer';
import {reducer as formReducer} from 'redux-form'

export const initialState = {
    eatWellStore: eatWellInitialState,
    authStore: authInitialState
};

export const reducers = {
    eatWellStore: eatWellReducer,
    authStore: authReducer,
    form: formReducer
};
