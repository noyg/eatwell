import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import css from './RestaurantForm.scss';

class RestaurantForm extends React.Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <Field name="name" component="input" type="text" required="required"/>
                <label htmlFor="address">Address</label>
                <Field name="address" component="textarea" required="required"/>
                <button>Submit</button>
            </form>
        )
    }
}

RestaurantForm = reduxForm({
    form: 'restaurant' // a unique name for this form
})(RestaurantForm);

export default RestaurantForm;