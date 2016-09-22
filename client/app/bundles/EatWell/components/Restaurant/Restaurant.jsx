import React, {PropTypes} from 'react';
import css from './Restaurant.scss';

import StarRating from '../StarRating/StarRating';
import TenbisImg from './images/tenbis.png';


export default class Restaurant extends React.Component {
    static propTypes = {
        handleDelete: PropTypes.func.isRequired,
        restaurant: PropTypes.object.isRequired
    };

    render() {
        const {id, name, address, rating, tenbis} = this.props.restaurant;
        const cardIcon = tenbis ? <img src={TenbisImg} title="Accepts 10Bis"/> : null;
        return (
            <div className={`panel panel-default ${css.restaurant}`}>
                <div className="panel-body clearfix row">
                    <div className={`col-sm-1 ${css.icon}`}>
                        <i className="cuisinesicon cuisinesicon-burger"></i>
                    </div>
                    <div className="col-sm-11">
                        <div className="btn-group pull-right">
                            <button type="button" className="btn btn-xs btn-link" aria-label="Edit">
                                <span className="glyphicon glyphicon-pencil small" aria-hidden="true"></span>
                            </button>
                            <button type="button" className="btn btn-xs btn-link" aria-label="Delete"
                                    onClick={() => this.props.handleDelete(id)}>
                                <span className="glyphicon glyphicon-trash small" aria-hidden="true"></span>
                            </button>
                        </div>
                        <strong>{name}</strong> {cardIcon}
                        <StarRating rating={parseFloat(rating)}/>
                    </div>
                </div>
            </div>
        )
    }
}