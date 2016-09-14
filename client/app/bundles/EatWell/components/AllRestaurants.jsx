import React, {PropTypes} from 'react';

import Restaurant from './Restaurant';

export default class AllRestaurants extends React.Component {
    static propTypes = {
        handleDelete: PropTypes.func.isRequired,
        restaurants: PropTypes.array.isRequired
    };

    render() {
        const {restaurants} = this.props;
        var restaurantElements = restaurants.map((restaurant) => {
            return (
                <Restaurant key={restaurant.id}
                            restaurant={restaurant}
                            handleDelete={this.props.handleDelete}/>
            )
        });
        return (
            <div>
                {restaurantElements}
            </div>
        )
    }
}