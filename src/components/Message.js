import React, {Component} from 'react';
import '../index.css';
import PropTypes from 'prop-types';

class Message extends Component {
    propTypes = { //Перевіряє що об'єкт отримує
        messages: PropTypes.object,
    };

    render() {

        return (
            <ul className="Messages">
                    {this.props.messages.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.user} <br/><b>{item.text}</b>
                            </li>
                        )
                    })}
                </ul>
        );
    }
}

export default Message;
