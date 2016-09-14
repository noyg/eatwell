import React, {PropTypes} from 'react';

import AllRestaurants from './AllRestaurants';
import RestaurantForm from './RestaurantForm';

// Simple example of a React "dumb" component
export default class EatWellWidget extends React.Component {
    static propTypes = {
        // If you have lots of data or action properties, you should consider grouping them by
        // passing two properties: "data" and "actions".
        deleteRestaurant: PropTypes.func.isRequired,
        createRestaurant: PropTypes.func.isRequired,
        restaurants: PropTypes.array.isRequired
    }

    constructor(props, context) {
        super(props, context);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleDelete(id) {
        this.props.deleteRestaurant(id);
    }

    handleCreate(restaurant) {
        this.props.createRestaurant(restaurant);
    }

    render() {
        const {restaurants} = this.props;
        return (
            <div className="container">
                <RestaurantForm onSubmit={this.handleCreate}/>
                <AllRestaurants restaurants={restaurants}
                                handleDelete={this.handleDelete}/>
            </div>
        );
    }
}
