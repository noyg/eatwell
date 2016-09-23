import React, {PropTypes} from 'react';
import css from './UserComponent.scss';

import LoginForm from '../LoginForm/LoginForm';

export default class UserComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    render() {
        const user = this.props.user;
        const loginButton = user ? 'login' : 'logout';

        return (
            <div className={css.user}>
                <i className="glyphicon glyphicon-user"></i>
                {loginButton}
            </div>
        );
    }
}
