import React, {Component} from 'react';
import '../index.css';
import NewMessege from "./NewMessege";

class AppBody extends Component {
    render() {
        return (
            <div className="AppBody">
                <li>hallo</li>
                <li>servus</li>
                <li>my name Kel</li>
               <NewMessege/>
            </div>
        );
    }
}

export default AppBody;
