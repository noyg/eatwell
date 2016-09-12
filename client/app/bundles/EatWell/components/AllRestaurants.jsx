import React, {PropTypes} from 'react';
import Immutable from 'immutable';

import Restaurant from './Restaurant';

export default class AllRestaurants extends React.Component {
    static propTypes = {
        handleDelete: PropTypes.func.isRequired,
        restaurants: PropTypes.instanceOf(Immutable.List).isRequired
    };

    render() {
        const {restaurants} = this.props;
        var restaurantElements = restaurants.map((restaurant) => {
            return (
                <Restaurant key={restaurant.get('id')}
                            restaurant={restaurant.toJS()}
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