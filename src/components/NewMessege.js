import React, {Component} from 'react';
import '../index.css';



class NewMessege extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hallo'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            <div className="NewMessege">

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Send" />
                </form>

            </div>
        );
    }
}

export default NewMessege;
