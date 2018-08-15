import React, {Component} from 'react';
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {user: undefined};

    }

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
