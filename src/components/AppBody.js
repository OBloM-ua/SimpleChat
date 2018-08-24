import React, {Component} from 'react';
import '../index.css';
import * as firebase from 'firebase';
import Message from "./Message";
import PropTypes from "prop-types";

class AppBody extends Component {
  static propTypes = { //Перевіряє що об'єкт отримує
    user: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const ref = firebase.database().ref('messages');
    ref.on('value', (snapshot) => {
      let messages = snapshot.val();
      let newState = [];
      for (let sms_id in messages) {
        if (messages.hasOwnProperty(sms_id))
          newState.push({
            id: sms_id,
            user: messages[sms_id].user,
            text: messages[sms_id].text,
            timestamp: messages[sms_id].timestamp
          });
      }
      this.setState({
        messages: newState
      });
    });
  }

  getMessages() {
    return this.state.messages.map(message => {
      return <Message key={message.id} message={message} user={this.props.user}/>
    });
  }


//this.state.message.user.photoURL === this.props.user.photoURL
  //style={this.checkMyMessage() ? {alignItems: 'flex-end'} : {alignItems: 'flex-start'}}
  render() {
    return (
      <div className="AppBody">
        {this.getMessages()}
      </div>
    );
  }
}

export default AppBody;
