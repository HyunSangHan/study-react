import React, {Component} from 'react';
import CounterListContainer from './CounterListContainer';
import { connect } from 'react-redux';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CounterListContainer/>
            </div>
        );
    }
}

// 액션 생성 함수 준비
const mapToDispatch = (dispatch) => ({
    // onCreate: () => dispatch(actions.create(getRandomColor())),
    // onRemove: () => dispatch(actions.remove())
});

// 리덕스에 연결시키고 내보냅니다
export default connect(null, mapToDispatch)(App); //?