import Immutable from 'immutable';

import actionTypes from '../constants/eatWellConstants';

export const $$initialState = Immutable.fromJS({
  name: '', // this is the default state that would be used if one were not passed into the store
});

export default function eatWellReducer($$state = $$initialState, action) {
  const { type, name } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return $$state.set('name', name);

    default:
      return $$state;
  }
}