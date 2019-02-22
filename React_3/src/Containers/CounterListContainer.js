import CounterList from '../Components/CounterList';
import * as Actions from '../Actions';
import {connect} from 'react-redux';
import getRandomColor from '../lib/getRandomColor';

// store 안의 state 값을 props로 연결해줍니다.
const mapStateToProps = (state) => ({number: state.number, color: state.color});

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch) => {
    return ({
        onIncrement: (index) => dispatch(Actions.increment(index)),
        onDecrement: (index) => dispatch(Actions.decrement(index)),
        onSetColor: (index) => {
            const newColor = getRandomColor()
            dispatch(Actions.setColor(index, newColor))
        }
    });
}

// 데이터와 함수들이 props로 붙은 컴포넌트 생성
const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);



export default CounterListContainer;