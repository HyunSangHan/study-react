import React, {Component} from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';
import getRandomColor from '../lib/getRandomColor';

import { connect } from 'react-redux';
import * as actions from '../actions';

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
export default connect(null, mapToDispatch)(App);