import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import css from './Body.scss';

import AllRestaurants from '../AllRestaurants/AllRestaurants';
import RestaurantFilters from '../RestaurantFilters/RestaurantFilters';
import GoogleMap from 'google-map-react';

const Body = (props) => {
    const {dispatch, eatWellStore, authStore} = props;
    const restaurants = eatWellStore['restaurants'];
    const deleteRestaurant = () => {
    };



    return (
        <section className="container">
            <RestaurantFilters />
            <div className={`row ${css.body}`}>
                <div className={`col-sm-6 ${css.body_col}`}>
                    <AllRestaurants restaurants={restaurants}
                                    handleDelete={deleteRestaurant}/>
                </div>
                <div className={`col-sm-6 ${css.body_col}`}>
                    <GoogleMap
                        bootstrapURLKeys={{
                            key: 'AIzaSyBW62oXrn0kaMbsnHnKum71DUNegku-V4I',
                        }}
                        defaultCenter={{lat: 32.0750022, lng: 34.7812827}}
                        defaultZoom={17}
                        >
                    </GoogleMap>
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