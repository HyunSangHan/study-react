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
    // }

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
//                     style={{backgroundColor: color}}
                     onClick={() => this.props.onIncrement(this.props.index)} //index는 왜?
                     onContextMenu={() => this.props.onDecrement(this.props.index)}
                     onDoubleClick={() => this.props.onSetColor(this.props.index)}>
                    {this.props.number}
                </div>
            </div>

        );
    //color는 왜 안될까..


        //어떻게 다 같은 숫자로 업데이트 되는 것?
    }
}

export default Circle;

