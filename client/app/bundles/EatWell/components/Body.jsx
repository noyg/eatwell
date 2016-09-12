import React, {PropTypes} from 'react';

import AllRestaurants from './AllRestaurants';
import RestaurantForm from './RestaurantForm';

export default class Body extends React.Component {
    handleUpdate(restaurant) {
        $.ajax({
            url: `/api/v1/restaurants/${restaurant.id}`,
            type: 'PUT',
            data: {restaurant: restaurant},
            success: () => {
                this.updateRestaurants(restaurant);
            }
        })
    }

    updateRestaurants(restaurant) {
        var restaurants = this.state.restaurants.filter((r) => {
            return r.id != restaurant.id
        });
        restaurants.push(restaurant);

        this.setState({restaurants: restaurants});
    }

    render() {
        return (
            <div>
                <AllRestaurants restaurants={[]} handleDelete={this.handleDelete}
                                onUpdate={this.handleUpdate}/>
                <RestaurantForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}