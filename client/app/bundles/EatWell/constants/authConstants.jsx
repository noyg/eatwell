// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax.

import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
    'AUTH_USER_LOGGED_IN',
]);

export default actionTypes;
