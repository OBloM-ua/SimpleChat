import React, {Component} from 'react';
import '../index.css';

class AppBody extends Component {
    render() {
        return (
            <div className="AppBody">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AppBody;
