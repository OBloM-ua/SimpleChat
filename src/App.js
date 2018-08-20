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
            } else {
                console.log("user is logged OUT");
                // User is signed out.
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
            const ref = firebase.database().ref('users');
            ref.push({displayName: user.displayName, email:  user.email, photoURL:  user.photoURL, uid:  user.uid});
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
        console.log("logOut");
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
                {/*<AppHeader user={this.state.user}*/}
                           {/*logInAction={this.logIn.bind(this)}*/}
                           {/*logOutAction={this.logOut.bind(this)}*/}
                {/*/>*/}

                {this.state.user ?
                    <div>
                        <AppBody/>
                        <Footer/>
                    </div>
                    :
                    <div className="LoginText">Please LogIn
                    </div>}

            </div>
        );
    }
}

export default App;
