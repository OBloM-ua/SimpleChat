import React, {Component} from 'react';
import '../index.css';
import * as firebase from 'firebase';

class NewMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    sendMessage(){
        if(this.state.text === '') return;
        let ref = firebase.database().ref('massages');
        ref.push({text: this.state.text, timestamp: Date.now(), user: "galeta"})
    }

    handleChange(event) {
        this.setState({text: event.target.value});
        console.log(event.target.value);

    }

    render() {
        return (
            <div className="NewMessage">
                    Message:
                <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>

                <button onClick={this.sendMessage.bind(this)}>send</button>
            </div>
        );
    }
}

export default NewMessage;
