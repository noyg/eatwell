import React from 'react';
import ReactOnRails from 'react-on-rails';
import {Provider} from 'react-redux';

import AppContainer from '../containers/AppContainer';

import ApplicationStore from '../store/ApplicationStore'

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const EatWellApp = () => {
    const store = ReactOnRails.getStore('ApplicationStore');

    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};

ReactOnRails.registerStore({ApplicationStore});
ReactOnRails.register({EatWellApp});