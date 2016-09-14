import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import css from './LoginForm.scss';

class LoginForm extends React.Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" required="required"/>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" required="required"/>
                <button>Login</button>
            </form>
        )
    }
}

LoginForm = reduxForm({
    form: 'login' // a unique name for this form
})(LoginForm);

export default LoginForm;