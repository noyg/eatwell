import actionTypes from '../constants/eatWellConstants';

function addRestaurant(restaurant) {
    return {
        type: actionTypes.EAT_WELL_RESTAURANT_ADD,
        payload: restaurant
    }
}

function removeRestaurant(id) {
    return {
        type: actionTypes.EAT_WELL_RESTAURANT_REMOVE,
        payload: id
    }
}

export function createRestaurant(restaurant) {
    const tmpId = Date.now();
    return (dispatch) => {
        // optimistic UI FTW
        dispatch(addRestaurant({...restaurant, id: tmpId}));

        $.ajax({
            url: '/api/v1/restaurants.json',
            type: 'POST',
            data: {restaurant},
        }).done((response) => {
            dispatch(removeRestaurant(tmpId));
            dispatch(addRestaurant(response));
        }).fail(() => dispatch(removeRestaurant(tmpId)));
    };

}

export function deleteRestaurant(id) {
    return (dispatch) => {
        $.ajax({
            url: `/api/v1/restaurants/${id}.json`,
            type: 'DELETE',
        }).done((response) => {
            dispatch(removeRestaurant(id))
        });
    }
}