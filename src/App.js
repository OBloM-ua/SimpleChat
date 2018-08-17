import React, {Component} from 'react';
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";
import * as firebase from "firebase";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {user: undefined};
        this.checkUser();
    }


    checkUser() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("user is logged IN");
                this.setState({user: user});
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // ...
            } else {
                console.log("user is logged OUT");
                // User is signed out.
                // ...
            }
        });
    }

    logIn() {
        console.log("logIn");
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            //
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
    }

    logOut() {
        console.log("logOut")
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            this.setState({user: undefined})

        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <div className="App">
                <AppHeader user={this.state.user}
                           logInAction={this.logIn.bind(this)}
                           logOutAction={this.logOut.bind(this)}
                />

                {this.state.user ?
                    <div>
                        <AppBody/>
                        <Footer/>
                    </div>
                    :
                    <div className="LoginText">Please LogIn</div>}

            </div>
        );
    }
}

export default App;
