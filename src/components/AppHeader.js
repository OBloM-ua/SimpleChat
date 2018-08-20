import React, {Component} from 'react';
import '../index.css';
import PropTypes from 'prop-types';

class AppHeader extends Component {

    propTypes = { //Перевіряє що об'єкт отримує
        user: PropTypes.object,
        logInAction: PropTypes.func,
        logOutAction: PropTypes.func
    };


    render() {

        return (
            <ul className="AppHeader">
                {this.props.user ?
                    <div>
                        <li><a className="active" href="/">Home</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">About</a></li>
                        <li className="right" onClick={this.props.logOutAction}><a>LogOut</a></li>
                    </div>
                    :
                    <li className="right" onClick={this.props.logInAction}><a>LogIn</a></li>
                }

            </ul>
        );
    }
}

export default AppHeader;
