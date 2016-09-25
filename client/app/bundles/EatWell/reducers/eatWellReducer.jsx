import actionTypes from '../constants/eatWellConstants';

export const initialState = {
    restaurants: [],
    modalOpen: false
};

export function reducer(state = initialState, action) {
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


        case actionTypes.EAT_WELL_MODAL_OPEN:
            return Object.assign({}, state, {
                modalOpen: true
            });

        case actionTypes.EAT_WELL_MODAL_CLOSE:
            return Object.assign({}, state, {
                modalOpen: false
            });

        default:
            return state;

    }
}