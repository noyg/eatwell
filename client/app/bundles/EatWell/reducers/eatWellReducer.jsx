import actionTypes from '../constants/eatWellConstants';

export const initialState = {
    restaurants: []
};

export default function eatWellReducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case actionTypes.EAT_WELL_RESTAURANT_ADD:
            // const restaurants = state['restaurants'].concat(payload);
            // return state.set('restaurants', restaurants);
            // return state;
            return Object.assign({}, state, {
                restaurants: state.restaurants.concat(payload)
            });

        case actionTypes.EAT_WELL_RESTAURANT_REMOVE:
            // return state.set('restaurants', state.get('restaurants').filter(r => r.get('id') != payload));
            // return state;
            return Object.assign({}, state, {
                restaurants: state.restaurants.filter(r => r.id != payload)
            });

        default:
            return state;

    }
}