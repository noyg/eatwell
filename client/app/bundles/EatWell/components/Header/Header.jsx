import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eatWellActionCreators from '../../actions/eatWellActionCreators';
import * as authActionCreators from '../../actions/authActionCreators';

import css from './Header.scss';

import UserComponent from '../Auth/UserComponent/UserComponent'

const Header = (props) => {
    const {dispatch, eatWellStore, authStore} = props;
    const user = authStore['user'];

    return (
        <header className={`text-center ${css.header}`}>
            <UserComponent user={user} />
            <h1>EatWell</h1>
            <h2>Let's find lunch now...</h2>
        </header>
    )
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
    eatWellStore: PropTypes.object.isRequired,
};

function select(state) {
    return {eatWellStore: state.eatWellStore, authStore: state.authStore};
}

export default connect(select)(Header);