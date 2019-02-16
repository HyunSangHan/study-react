import React, { Component } from 'react';
import './../App.css';
import './../Css/Counter.css';

class CircleHard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalNum1: 0,
            totalNum2: 0,
            totalNum3: 0,
            totalNum4: 0,
        }
    }

    clickCircle1 = () => () => {
        let totalNum = this.state.totalNum1;
        totalNum += 1;

        this.setState ({
            totalNum1: totalNum,
        });
    }

    clickCircle2 = () => () => {
        let totalNum = this.state.totalNum2;
        totalNum += 1;

        this.setState ({
            totalNum2: totalNum,
        });
    }

    clickCircle3 = () => () => {
        let totalNum = this.state.totalNum3;
        totalNum += 1;

        this.setState ({
            totalNum3: totalNum,
        });
    }

    clickCircle4 = () => () => {
        let totalNum = this.state.totalNum4;
        totalNum += 1;

        this.setState ({
            totalNum4: totalNum,
        });
    }

    render() {
        return (
            <div className="App">
                <div className={"flex"}>
                    <div className={"circle"} onClick={this.clickCircle1()}>
                        {this.state.totalNum1}
                    </div>
                    <div className={"circle"} onClick={this.clickCircle2()}>
                        {this.state.totalNum2}
                    </div>
                    <div className={"circle"} onClick={this.clickCircle3()}>
                        {this.state.totalNum3}
                    </div>
                    <div className={"circle"} onClick={this.clickCircle4()}>
                        {this.state.totalNum4}
                    </div>
                </div>
            </div>

        );
    }
}

export default CircleHard;

