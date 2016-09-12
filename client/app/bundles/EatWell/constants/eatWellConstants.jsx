// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax. See:
// client/app/bundles/EatWell/actions/eatWellActionCreators.jsx
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

// actionTypes = {EAT_WELL_NAME_UPDATE: "EAT_WELL_NAME_UPDATE"}
// Notice how we don't have to duplicate EAT_WELL_NAME_UPDATE twice
// thanks to mirror-creator.
export default actionTypes;
