import React, {PropTypes} from 'react';
import css from './UserComponent.scss';

import LoginForm from '../LoginForm/LoginForm';

export default class UserComponent extends React.Component {
    render() {
        return (
            <div className={css.user}>
                <i className="glyphicon glyphicon-user"></i>
            </div>
        );
    }
}
