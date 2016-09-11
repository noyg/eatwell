import React from 'react';

export default class NewRestaurant extends React.Component {
    handleClick() {
        var name = this.refs.name.value;
        var address = this.refs.address.value;
        $.ajax({
            url: '/api/v1/restaurants.json',
            type: 'POST',
            data: {restaurant: {name: name, address: address}},
            success: (restaurant) => {
                this.props.handleSubmit(restaurant);
            }
        });
    }

    render() {
        return (
            <div>
                <h2>New Restaurant</h2>
                <input ref="name" placeholder="Name"/>
                <input ref="address" placeholder="Address"/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}