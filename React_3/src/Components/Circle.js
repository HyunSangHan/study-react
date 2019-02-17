import React, { Component } from 'react';
import './../App.css';
import './../Css/Counter.css';

class Circle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plusNum : 0,
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
                <div className={"circle"} onClick={this.increaseNum()}>
                    {this.props.number + this.state.plusNum}
                </div>
            </div>

        );
    }
}

export default Circle;

