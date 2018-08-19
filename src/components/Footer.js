import React, {Component} from 'react';
import '../index.css';
import * as firebase from 'firebase';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            // users: []
        };
    }

    sendMessage() {
        if (this.state.text === '') return;
        const ref = firebase.database().ref('messages');
        ref.push({text: this.state.text, timestamp: Date.now(), user:'test user'});
        console.log(this.state.text);
        this.setState({text: ''});
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    onClickEnter(e) {
        if (e.charCode === 13) {
            this.sendMessage();
        }
    }
    // componentDidMount() {
    //     const ref = firebase.database().ref('users');
    //     ref.on('value', (snapshot) => {
    //         let users = snapshot.val();
    //         let newState = [];
    //         for (let sms_id in users) {
    //             newState.push({
    //                 id: sms_id,
    //                 displayName: users[sms_id].displayName,
    //                 email: users[sms_id].email,
    //                 photoURL: users[sms_id].photoURL
    //             });
    //         }
    //         this.setState({
    //             messages: newState
    //         });
    //     });
    // }

    render() {
        return (
            <div className="Footer">
                Message:
                <input type="text" onKeyPress={this.onClickEnter.bind(this)} value={this.state.text}
                       onChange={this.handleChange.bind(this)} placeholder="Enter your message"/>
                <button className="inputButton" onClick={this.sendMessage.bind(this)}>Send</button>
            </div>
        );
    }
}

export default Footer;
