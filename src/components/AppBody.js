import React, {Component} from 'react';
import '../index.css';
import * as firebase from 'firebase';

class AppBody extends Component {
    constructor() {
        super();
        this.state = {
            massages: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }



    componentDidMount() {
        const ref = firebase.database().ref('messages');
        ref.on('value', (snapshot) => {
            let massages = snapshot.val();
            let newState = [];
            for (let sms_id in massages) {
                newState.push({
                    id: sms_id,
                    text: massages[sms_id].text,
                    user: massages[sms_id].user
                });
            }
            this.setState({
                massages: newState
            });
        });
    }


    render() {
        // const ref = firebase.database().ref('messages');
        //
        // ref.on('value', (snapshot) => {
        //     console.log(snapshot.val());
        // });

        return (
            <section className='AppBody'>
                <div className="wrapper">
                    <ul>
                        {this.state.massages.map((item) => {
                            return (
                                <li key={item.id}>
                                    <h3>{item.text}</h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}

export default AppBody;
