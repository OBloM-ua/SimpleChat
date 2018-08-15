import React, {Component} from 'react';
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {user: undefined};

    }

    render() {
        return (
            <div className="App">

                <AppHeader/>
                <AppBody/>
                <Footer/>
            </div>
        );
    }
}

export default App;
