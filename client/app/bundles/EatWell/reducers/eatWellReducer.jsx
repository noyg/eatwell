import Immutable from 'immutable';

import actionTypes from '../constants/eatWellConstants';

export const $$initialState = Immutable.fromJS({
    restaurants: []
});

export default function eatWellReducer($$state = $$initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case actionTypes.EAT_WELL_RESTAURANT_ADD:
            const restaurants = $$state.get('restaurants').push(Immutable.fromJS(payload));
            return $$state.set('restaurants', restaurants);

        case actionTypes.EAT_WELL_RESTAURANT_REMOVE:
            return $$state.set('restaurants', $$state.get('restaurants').filter(r => r.get('id') != payload));

        case actionTypes.EAT_WELL_RESTAURANT_DELETE:
            // console.log('payload', payload);
            // return $$state.set('restaurants', payload);
            return $$state;

        default:
            return $$state;

    }
}