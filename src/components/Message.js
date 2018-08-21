import React, {Component} from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import * as moment from 'moment';

class Message extends Component {
    static propTypes = { //Перевіряє що об'єкт отримує
        message: PropTypes.object,
    };

    render() {

        return (
            <div className="Message">
                <div>
                    <img className='messageImg' src={this.props.message.user.photoURL} />
                    {this.props.message.user.displayName}
                    {moment( this.props.message.timestamp).format( "   MM-DD-YYYY HH:mm:ss")}
                </div>
                <div>{this.props.message.text}</div>
            </div>
        );
    }
}

export default Message;
