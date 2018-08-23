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
            const user = result.user;
            firebase.database().ref('users/' + user.uid).set({
                displayName: user.displayName, email: user.email, photoURL: user.photoURL, uid: user.uid
            });
        })
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
                <AppHeader user={this.state.user}
                           logInAction={this.logIn.bind(this)} //передаю в гедер функції singIn signOut
                           logOutAction={this.logOut.bind(this)}
                />
                {this.state.user ?
                    <div>
                        <AppBody/>
                        <Footer user={this.state.user}/>
                    </div>
                    :
                    <div className="LoginText">Please login </div>}


            </div>
        );
    }
}

export default App;
