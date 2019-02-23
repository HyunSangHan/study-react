import React, {Component} from 'react';
import Circle from './Circle';
import PropTypes from 'prop-types'; //?
import '../Css/Counter.css';
import '../App.css';

class CounterList extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            circleData : [
                {index: 0},
                {index: 1},
                {index: 2},
                {index: 3},
            ]
        }
    }
    render (){
        return(
            <div className="flex">
                {this.state.circleData.map(
                    (aaaa, i) => (  //?
                        <Circle
                            index = {i}
//                           {...circle} //
                            onIncrement = {this.props.onIncrement}
                            onDecrement = {this.props.onDecrement}
                            onSetColor = {this.props.onSetColor}
                            number = {this.props.number}
                            color = {this.props.color}
                        />
                    )
                )}
            </div>
        );
    }
};

CounterList.propTypes = {
    // number: PropTypes.arrayOf(PropTypes.shape({number: PropTypes.number})),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
    number: PropTypes.number,
    color: PropTypes.string
};

export default CounterList;
