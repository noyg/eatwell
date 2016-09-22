import React, {PropTypes} from 'react';
import css from './StarRating.scss';

export default class StarRating extends React.Component {
    static propTypes = {
        rating: PropTypes.number.isRequired
    };

    render() {
        const rating = this.props.rating,
            width = (rating * 20), //convert 0.0-5.0 scale to pct scale
            style = {
                width: width.toString().concat('%')
            };
        return (
            <div>
                Rating:&nbsp;
                <div className={css.rating_container} title={rating}>
                    <div className={css.top} style={style}>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <div className={css.bottom}>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                </div>
            </div>
        )
    }
}