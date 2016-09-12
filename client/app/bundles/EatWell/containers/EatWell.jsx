import React, {PropTypes} from 'react';
import EatWellWidget from '../components/EatWellWidget';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Immutable from 'immutable';
import * as eatWellActionCreators from '../actions/eatWellActionCreators';

function select(state) {
    // Which part of the Redux global state does our component want to receive as props?
    // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
    return {$$eatWellStore: state.$$eatWellStore};
}

// Simple example of a React "smart" component
const EatWell = (props) => {
    const {dispatch, $$eatWellStore} = props;
    const actions = bindActionCreators(eatWellActionCreators, dispatch);
    const {deleteRestaurant, createRestaurant} = actions;
    const restaurants = $$eatWellStore.get('restaurants');

    return (
        <EatWellWidget {...{deleteRestaurant, createRestaurant, restaurants}} />
    );
};

EatWell.propTypes = {
    dispatch: PropTypes.func.isRequired,

    // This corresponds to the value used in function select above.
    // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
    // This allows us to immediately know we don't call $$eatWellStore['someProperty'], but
    // instead use the Immutable.js `get` API for Immutable.Map
    $$eatWellStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export EatWell, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(EatWell);
