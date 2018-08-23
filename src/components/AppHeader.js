import React, {Component} from 'react';
import '../index.css';
import PropTypes from 'prop-types';

class AppHeader extends Component {

    static propTypes = { //Перевіряє що об'єкт отримує
        user: PropTypes.object,
        logInAction: PropTypes.func,
        logOutAction: PropTypes.func
    };


    render() {
        return (
            <div>

                {this.props.user ?
                    <div className="AppHeader">
                        <div className='gitButton'>
                            <a href="https://github.com/OBloM-ua">My Git</a>
                            <div className="gitImg"/>
                        </div>
                        <div className="rightOut" onClick={this.props.logOutAction}>
                            LogOut
                            <div className="PhotoURL" style={{
                                background: 'url(%1) no-repeat'.replace('%1', this.props.user.photoURL),
                                backgroundSize: 'contain'
                            }}/>
                        </div>
                    </div>
                    :
                    <div className="AppHeaderLogin" >
                        <div className='gitButton'>
                            <a href="https://github.com/OBloM-ua">My Git</a>
                            <div className="gitImg"/>
                        </div>
                        <div className='rightOut' onClick={this.props.logInAction}> LogIn
                            <div className="googleImg"  />
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default AppHeader;
