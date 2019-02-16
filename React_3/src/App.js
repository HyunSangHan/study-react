import React, { Component } from 'react';
import './App.css';
import './Css/Counter.css';
import OpenAPIs from './Components/OpenAPIs';
import Circle from './Components/Circle';
import CircleHard from './Components/CircleHard';
// import {Grid, Col, Row} from 'reactstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            circleData : [
                {totalNum: 0, id: 0},
                {totalNum: 0, id: 1},
                {totalNum: 0, id: 2},
                {totalNum: 0, id: 3},
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
                <div className="flex">
                    <CircleHard/>
                </div>
            </div>

        );
    }
}

export default App;

