import React from 'react';
import ReactOnRails from 'react-on-rails';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from 'redux-thunk';

import reducers from '../reducers/reducersIndex';
import composeInitialState from '../store/composeInitialState';

import EatWellContainer from '../containers/EatWellContainer';

const EatWellApp = (props, railsContext) => {
    const combinedReducer = combineReducers(reducers);
    const combinedProps = composeInitialState(props, railsContext);

    // This is where we'll put in the middleware for the async function. Placeholder.
    // store will have helloWorldData as a top level property
    const store = applyMiddleware(middleware)(createStore)(combinedReducer, combinedProps);

    // Provider uses the this.props.children, so we're not typical React syntax.
    // This allows redux to add additional props to the HelloWorldContainer.
    return (
        <Provider store={store}>
            <EatWellContainer />
        </Provider>
    );
};

// This is how react_on_rails can see the EatWellApp in the browser.
ReactOnRails.register({ EatWellApp });