import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD9-YJEc45omqWJ1d4aMw9W2Eb4bx5lbHo",
    authDomain: "simplechat-12.firebaseapp.com",
    databaseURL: "https://simplechat-12.firebaseio.com",
    projectId: "simplechat-12",
    storageBucket: "simplechat-12.appspot.com",
    messagingSenderId: "841403808599"

};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
