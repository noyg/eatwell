// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax.
import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
    'EAT_WELL_RESTAURANTS_FETCH',
    'EAT_WELL_RESTAURANTS_FETCH_STARTED',
    'EAT_WELL_RESTAURANTS_FETCH_COMPLETED',
    'EAT_WELL_RESTAURANTS_FETCH_ERROR',
    'EAT_WELL_RESTAURANT_CREATE',
    'EAT_WELL_RESTAURANT_ADD',
    'EAT_WELL_RESTAURANT_REMOVE',
    'EAT_WELL_RESTAURANT_UPDATE',
    'EAT_WELL_RESTAURANT_DELETE',
]);

export default actionTypes;
