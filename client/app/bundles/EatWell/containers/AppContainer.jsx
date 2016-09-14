import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eatWellActionCreators from '../actions/eatWellActionCreators';
import * as authActionCreators from '../actions/authActionCreators';

import EatWellWidget from '../components/EatWellWidget/EatWellWidget';
import * as Auth from '../components/Auth/auth-components';

// Simple example of a React "smart" component
const AppContainer = (props) => {
    const {dispatch, eatWellStore} = props;
    const eatWellActions = bindActionCreators(eatWellActionCreators, dispatch);
    const {deleteRestaurant, createRestaurant} = eatWellActions;
    const authActions = bindActionCreators(authActionCreators, dispatch);
    const {login} = authActions;
    const restaurants = eatWellStore['restaurants'];

    return (
        <div>
            <Auth.LoginComponent {...{login}} />
            <EatWellWidget {...{deleteRestaurant, createRestaurant, restaurants}} />
        </div>
    );
};

AppContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    eatWellStore: PropTypes.object.isRequired,
};

function select(state) {
    return {eatWellStore: state.eatWellStore, authStore: state.authStore};
}
export default connect(select)(AppContainer);
