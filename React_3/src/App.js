import React, { Component } from 'react';
import './App.css';
import './Css/Counter.css';
import OpenAPIs from './Components/OpenAPIs';
import Circle from './Components/Circle';
// import {Container, Col} from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            circleData : [
                {totalNum: 0, id: 0},
                {totalNum: 0, id: 1},
                {totalNum: 0, id: 2},
                {totalNum: 0, id: 3},
                {totalNum: 0, id: 4},
                {totalNum: 0, id: 5},
                {totalNum: 0, id: 6},
                {totalNum: 0, id: 7},
                {totalNum: 0, id: 8},
                {totalNum: 0, id: 9},
                {totalNum: 0, id: 10},
                {totalNum: 0, id: 11},
                {totalNum: 0, id: 12},
                {totalNum: 0, id: 13},

            ]
        }
    }

    render() {
        return (
            <div className="App">
                <OpenAPIs/>
                <div className="flex">
                    {this.state.circleData.map((circle, i) => {
                        return (<Circle number={circle.totalNum} id={circle.id} key={i} />);
                    })}
                </div>
            </div>

        );
    }
}

export default App;

