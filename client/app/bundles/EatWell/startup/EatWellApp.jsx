import React from 'react';
import ReactOnRails from 'react-on-rails';
import {Provider} from 'react-redux';

import createStore from '../store/eatWellStore';
import EatWell from '../containers/EatWell';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const EatWellApp = (props, _railsContext) => {
    const store = createStore(props);
    const reactComponent = (
        <Provider store={store}>
            <EatWell />
        </Provider>
    );
    return reactComponent;
};

// This is how react_on_rails can see the EatWellApp in the browser.
ReactOnRails.register({EatWellApp});
