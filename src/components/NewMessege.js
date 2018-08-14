import React, {Component} from 'react';
import '../index.css';



class NewMessege extends Component {
    render() {
        return (
            <div className="NewMessege">
                <form>
                    <label>
                        New Messege:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default NewMessege;
