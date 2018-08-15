import React, {Component} from 'react';
import '../index.css';
import * as firebase from 'firebase';

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
                    {this.state.messages.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.user} <br/><b>{item.text}</b>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default AppBody;
