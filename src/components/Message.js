import React, {Component} from 'react';
import '../index.css';
import PropTypes from 'prop-types';

class Message extends Component {
    static propTypes = { //Перевіряє що об'єкт отримує
        message: PropTypes.object,
    };

    render() {

        return (
            <div className="Message">
                    {this.props.message.user} <br/><b>{this.props.message.text}</b>

            </div>
        );
    }
}

export default Message;
