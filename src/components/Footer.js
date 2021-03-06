import React, {Component} from 'react';
import '../index.css';
import * as firebase from 'firebase';
import PropTypes from "prop-types";


class Footer extends Component {
    static propTypes = { //Перевіряє що об'єкт отримує
        user: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    sendMessage() {
        if (this.state.text === '') return;
        const ref = firebase.database().ref('messages');
        ref.push({
            text: this.state.text,
            timestamp: Date.now(),
            user: {
                photoURL: this.props.user.photoURL,
                displayName: this.props.user.displayName
            }
        });

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

    render() {
        return (
            <div className="Footer">
                <input type="text" onKeyPress={this.onClickEnter.bind(this)} value={this.state.text}
                       onChange={this.handleChange.bind(this)} placeholder="Enter your message"/>
                <button className="inputButton" onClick={this.sendMessage.bind(this)}>Send</button>
            </div>
        );
    }
}

export default Footer;
