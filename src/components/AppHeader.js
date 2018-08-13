import React, {Component} from 'react';
import '../index.css';

class AppHeader extends Component {
    render() {
        return (
            <ul className="AppHeader">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="right"><a href="#about">About</a></li>
            </ul>
        );
    }
}

export default AppHeader;
