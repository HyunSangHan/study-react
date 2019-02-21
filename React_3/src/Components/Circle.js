import React, { Component } from 'react';
import './../App.css';
import './../Css/Counter.css';

class Circle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plusNum : 0,
            onIncrement: () => {
                return console.warn('onIncrement not defined');
            },
            onSetColor: () => {
                return console.warn('setColor not defined');
            }
        }
    }

    increaseNum = () => () => {
        let plusNum = this.state.plusNum;
        plusNum += 1;

        this.setState ({
            plusNum: plusNum
        });
    }


    render() {
        return (
            <div className="App mt-4">
                {this.props.id + 1 + "번째"}
                <div className={"circle"} onClick={this.props.onIncrement} >
                    {this.props.totalNum + this.state.plusNum}
                </div>
            </div>

        );
    }
}

export default Circle;

