// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/EatWell/store/ApplicationStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import eatWellReducer from './eatWellReducer';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form'

export default {
    eatWellStore: eatWellReducer,
    authStore: authReducer,
    form: formReducer
};
