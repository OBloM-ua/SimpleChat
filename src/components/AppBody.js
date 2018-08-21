import React, {Component} from 'react';
import '../index.css';
import * as firebase from 'firebase';
import Message from "./Message";

class AppBody extends Component {
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

    render() {
        return (
            <div className="AppBody">
                <ul>
                    <Message messages={this.state.messages}/>
                </ul>
            </div>
        );
    }

}

export default AppBody;
