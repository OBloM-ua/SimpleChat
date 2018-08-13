import React, { Component } from 'react';
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import LoginPage from "./components/LoginPage";

class App extends Component {
  render() {
    return (
        <div>
         <LoginPage/>
        </div>
    );
  }
}

export default App;
