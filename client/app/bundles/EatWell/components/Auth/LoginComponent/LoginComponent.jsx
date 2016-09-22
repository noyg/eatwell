import React, {PropTypes} from 'react';
import css from './LoginComponent.scss';

import LoginForm from '../LoginForm/LoginForm';

// Simple example of a React "dumb" component
export default class LoginComponent extends React.Component {
    static propTypes = {
        // login: PropTypes.func.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(credentials) {
        this.props.login(credentials);
    }

    render() {
        return (
            <LoginForm onSubmit={this.handleLogin}/>
        );
    }
}
