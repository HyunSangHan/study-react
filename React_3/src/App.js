import React, { Component } from 'react';
import './App.css';
import './Css/Counter.css';
import axios from 'axios';
import OpenAPIs from './Components/OpenAPIs';
// import {Grid, Col, Row} from 'reactstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalNum: 0
        }
    }

    clickCircle = () => () => {
        let totalNum = this.state.totalNum;
        totalNum += 1;

        this.setState ({
            totalNum: totalNum
        });
    }


    render() {
        return (
            <div className="App">
                <div className={"flex"}>
                    <div className={"circle"} onClick={this.clickCircle()}>
                        {this.state.totalNum}
                    </div>
                </div>
            </div>

        );
    }
}

export default App;

