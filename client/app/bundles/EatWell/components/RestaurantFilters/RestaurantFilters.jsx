import React, {PropTypes} from 'react';
import css from './RestaurantFilters.scss';

export default class RestaurantFilters extends React.Component {
    render() {
        return (
            <div className={`row ${css.filters}`}>
                <div className="col-sm-4 form-group">
                    <label htmlFor="cuisine">Cuisine</label>
                    <select name="cuisine" className="form-control">
                        <option value="hamburger">Hamburger</option>
                        <option value="asian">Asian</option>
                    </select>
                </div>
                <div className="col-sm-4 form-group">
                    <label htmlFor="rating">Rating</label>
                    <select name="rating" className="form-control">
                        <option value="5up">5 stars and up</option>
                        <option value="4up">4 stars and up</option>
                    </select>
                </div>
                <div className="col-sm-4 form-group">
                    <label htmlFor="speed">Speed</label>
                    <select name="speed" className="form-control">
                        <option value="lt30m">Less than 30 minutes</option>
                        <option value="lt1hr">Less than 1 hour</option>
                    </select>
                </div>
            </div>
        )
    }
}