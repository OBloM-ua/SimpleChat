import React, {Component} from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import * as moment from 'moment';

class Message extends Component {
  static propTypes = { //Перевіряє що об'єкт отримує
    message: PropTypes.object,
    user: PropTypes.object
  };

  checkMyMessage() {
    if (this.props.message.user.photoURL === this.props.user.photoURL) {
      return 'my message';
    }
  }


  render() {
    const isMyMessage = this.checkMyMessage();
    return (
      <div style={isMyMessage ? {display: 'flex', justifyContent: 'flex-end'} : {display: 'flex'}}>
        <div className={isMyMessage ? 'MyMessage' : 'Message'}>
          <img className='messageImg' alt='defolt' src={this.props.message.user.photoURL}/>
          <div className='nameAndMessage'>
            <div className='DisplayName'> {this.props.message.user.displayName}</div>
            <div className='MessageText'>{this.props.message.text}</div>
          </div>
          <div className='timeStamp'> {moment(this.props.message.timestamp).format(" HH:mm")} </div>
        </div>
      </div>
    );
  }
}

export default Message;
