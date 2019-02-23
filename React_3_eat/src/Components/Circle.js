import React, { Component } from 'react';
import './../App.css';
import './../Css/Counter.css';

class Circle extends Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         plusNum : 0,
    //     }
    //     console.log(this.props.color)
    // }
    //
    // increaseNum = () => () => {
    //     let plusNum = this.state.plusNum;
    //     plusNum += 1;
    //
    //     this.setState ({
    //         plusNum: plusNum
    //     });
    // }


    render() {
        return (
            <div className="App mt-4">
                {this.props.index + 1 + "번째"}
                <div className={"circle"}

                     onClick={() => this.props.onIncrement(this.props.index)}
                     onContextMenu={() => this.props.onDecrement(this.props.index)}
                     onDoubleClick={() => this.props.onSetColor(this.props.index)}>
                    {this.props.number}
                </div>
            </div>

        );

    }
}

export default Circle;

