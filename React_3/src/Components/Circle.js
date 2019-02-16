import React, { Component } from 'react';
import './../App.css';
import './../Css/Counter.css';

class Circle extends Component {



    clickCircle = () => () => {
        let totalNum = this.props.number;
        totalNum += 1;

        this.setState ({
            totalNum: totalNum,
            // id: this.props.id
        });
    }


    render() {
        return (
            <div className="App">
                <div className={"flex"}>
                    <div className={"circle"} onClick={this.clickCircle()}>
                        {this.props.number}
                    </div>
                    {this.props.id}
                </div>
            </div>

        );
    }
}

export default Circle;

