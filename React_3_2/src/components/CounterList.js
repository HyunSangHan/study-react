import React, {Component} from 'react';
import Counter from './Counter';
import Circle from './Circle'
import PropTypes from 'prop-types';

import './CounterList.css';

class CounterList extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            circleData : [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3},

            ]
        }
    }
    render (){
        return(
        <div className="CounterList">
            {this.state.circleData.map(
                (circle, i) => (
                    <Circle
                        id={i}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        number ={this.props.number}
                    />
                )
            )}
        </div>
    );
    }
};

CounterList.propTypes = {
    number: PropTypes.arrayOf(PropTypes.shape({number: PropTypes.number})),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: []
}

export default CounterList;
