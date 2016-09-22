import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import css from './Body.scss';

import AllRestaurants from '../AllRestaurants/AllRestaurants';
import RestaurantFilters from '../RestaurantFilters/RestaurantFilters';

const Body = (props) => {
    const {dispatch, eatWellStore} = props;
    const restaurants = eatWellStore['restaurants'];
    const deleteRestaurant = () => {
    };

    return (
        <section className="container">
            <RestaurantFilters />
            <div className={`row ${css.body}`}>
                <div className={'col-sm-6'}>
                    <AllRestaurants restaurants={restaurants}
                                    handleDelete={deleteRestaurant}/>
                </div>
                <div className={'col-sm-6'}>
                    Map Goes Here!!
                </div>
            </div>
        </section>
    )
}

Body.propTypes = {
    dispatch: PropTypes.func.isRequired,
    eatWellStore: PropTypes.object.isRequired,
};

function select(state) {
    return {eatWellStore: state.eatWellStore, authStore: state.authStore};
}

export default connect(select)(Body);