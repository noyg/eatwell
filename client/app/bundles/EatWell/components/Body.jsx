import React from 'react';

import AllRestaurants from './AllRestaurants';
import NewRestaurant from './NewRestaurant';

export default class Body extends React.Component {
    /*getInitialState() {
        return {restaurants: []}
    }*/

    componentDidMount() {
        $.getJSON('/api/v1/restaurants.json', (restaurants) => {
            this.setState({restaurants: restaurants})
        });
    }

    handleSubmit(restaurant) {
        var newState = this.state.restaurants.concat(restaurant);
        this.setState({restaurants: newState})
    }

    handleDelete(id) {
        $.ajax({
            url: `/api/v1/restaurants/${id}`,
            type: 'DELETE',
            success: () => {
                this.removeRestaurantClient(id);
            }
        });
    }

    removeRestaurantClient(id){
        var newRestaurants = this.state.restaurants.filter((rest) => {
            return rest.id != id;
        });

        this.setState({restaurants: newRestaurants});
    }

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

    render()
    {
        console.log(this.props);
        return (
            <div>
                <AllRestaurants restaurants={this.state.restaurants} handleDelete={this.handleDelete}
                                onUpdate={this.handleUpdate}/>
                <NewRestaurant handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}