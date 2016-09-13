// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/EatWell/store/eatWellStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import eatWellReducer from './eatWellReducer';
import {reducer as formReducer} from 'redux-form'
import { authStateReducer } from "redux-auth";

import Immutable from "immutable";

import {$$initialState as $$eatWellState} from './eatWellReducer';

const auth = (state = {}, action) => {
    return authStateReducer(Immutable.fromJS(state), action);
}

export default {
    $$eatWellStore: eatWellReducer,
    form: formReducer,
    auth: authStateReducer
};

export const initialStates = {
    $$eatWellState,
};
