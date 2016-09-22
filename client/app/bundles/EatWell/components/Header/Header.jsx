import React, {PropTypes} from 'react';
import css from './Header.scss';

import UserComponent from '../Auth/UserComponent/UserComponent'

export default class Header extends React.Component {
    static propTypes = {};

    render() {
        return (
            <header className={`text-center ${css.header}`}>
                <UserComponent />
                <h1>EatWell</h1>
                <h2>Let's find lunch now...</h2>
            </header>
        )
    }
}