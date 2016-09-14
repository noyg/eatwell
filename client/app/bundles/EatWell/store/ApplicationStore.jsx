import {compose, createStore, applyMiddleware, combineReducers} from 'redux';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

export default props => {
    const initialState = {
        eatWellStore: {restaurants: props.restaurants}
    };

    // This is how we get initial props Rails into redux.
    const reducer = combineReducers(reducers);
    const composedStore = compose(
        applyMiddleware(thunkMiddleware)
    );
    const storeCreator = composedStore(createStore);
    const store = storeCreator(reducer, initialState, window.devToolsExtension && window.devToolsExtension());

    return store;
};