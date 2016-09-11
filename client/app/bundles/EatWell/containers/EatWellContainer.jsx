import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import EatWell from './EatWell';

import * as helloWorldActions from '../actions/HelloWorldActions';

const HelloWorldContainer = ({actions, data}) => {
    return (
        <EatWell {...{actions, data}} />
    );
}
HelloWorldContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        data: state.helloWorldData,
        railsContext: state.railsContext,
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(helloWorldActions, dispatch)};
}

// Don't forget to actually use connect!
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);