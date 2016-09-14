import React, {PropTypes} from 'react';
import css from './Restaurant.scss';

export default class Restaurant extends React.Component {
    static propTypes = {
        handleDelete: PropTypes.func.isRequired,
        restaurant: PropTypes.object.isRequired
    };

    render() {
        const {id, name, address, rating} = this.props.restaurant;
        return (
            <div className={css.restaurant}>
                <h3>{name}
                    <small>{rating}</small>
                </h3>
                <p>{address}</p>
                <button onClick={() => this.props.handleDelete(id)}>Delete</button>
            </div>
        )
    }
}