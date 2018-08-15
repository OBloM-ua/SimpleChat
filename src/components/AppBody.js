import React, {Component} from 'react';
import '../index.css';
import * as firebase from 'firebase';

class AppBody extends Component {
    constructor() {
        super();
        this.state = {
            massages: []
        };
    }


    // componentDidMount() {
    //     const itemsRef = firebase.database().ref('items');
    //     itemsRef.on('value', (snapshot) => {
    //         let items = snapshot.val();
    //         let newState = [];
    //         for (let item in items) {
    //             newState.push({
    //                 id: item,
    //                 title: items[item].title,
    //                 user: items[item].user
    //             });
    //         }
    //         this.setState({
    //             items: newState
    //         });
    //     });
    // }


    render() {
        const ref = firebase.database().ref('messages');

        ref.on('value', (snapshot) => {
            console.log(snapshot.val());
        });

        return (
            <div className="AppBody">

                <div className="wrapper">
                    <ul>
                        {this.state.massages.map((item) => {
                            return (
                                <li key={item.id}>
                                    <h3>{item.user}</h3>
                                    <p>brought by: {item.text}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AppBody;
