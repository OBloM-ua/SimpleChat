import React, {Component} from 'react';
import '../index.css';
import * as firebase from "firebase";
import {Reference as browserHistory} from "firebase";

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'Sign in',
            user: undefined,
        };
        this.signInOut = this.signInOut.bind(this);
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this))
    }
    onAuthStateChanged(user) {
        if (user) {
            this.setState({
                user: user,
                label: 'Sign out',
                displayName: user.displayName,
            }, this.saveOrUpdateNewUser)
        }
        else {
            this.setState({
                user: null,
                label: 'Sign in',
            })
        }
    }
    saveOrUpdateNewUser() {
        let userRef = firebase.database().ref('users/' + this.state.user.uid)
        userRef.update({
            name: this.state.user.displayName,
            email: this.state.user.email,
            photoURL: '//graph.facebook.com/v2.8/' + this.state.user.providerData['0'].uid + '/picture?width=200&height=200',
        })
    }

    signInOut() {
        if (this.state.user) {
            firebase.auth().signOut();
            browserHistory.push('/')
        }
        else {
            let provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider);
            browserHistory.push('/')
        }
        return true;
    }

    render() {
        return (
            <ul className="AppHeader">
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>
                <li className="right"><a onClick={this.signInOut}>Login {this.state.label}</a></li>
            </ul>
        );
    }
}

export default AppHeader;
