import React, { Component } from 'react';
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";



class App extends Component {

  render() {
    return (
        <div>
            <AppHeader/>
            <AppBody/>
        </div>
    );
  }
}

export default App;
