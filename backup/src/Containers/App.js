import React, {Component} from 'react';
import CounterListContainer from './CounterListContainer';
import { connect } from 'react-redux';
import OpenAPIs from '../Components/OpenAPIs';
import * as Actions from '../Actions';

import CounterList from "../Components/CounterList";

class App extends Component {

    render() {
        return (
            <div className="App">
                <OpenAPIs onMovie={this.props.onMovie}
                          movieList={this.props.movieList}/>
                <CounterListContainer/>
            </div>
        );
    }
}

// 액션 생성 함수 준비
const mapToDispatch = (dispatch) => ({
     onMovie: (nowMovieList) => dispatch(Actions.setMovieList(nowMovieList)),
    // onCreate: () => dispatch(actions.create(getRandomColor())),
    // onRemove: () => dispatch(actions.remove())
});

const mapToState = (state) => ({
    movieList: state.movieList
})

// 리덕스에 연결시키고 내보냅니다
export default connect(mapToState, mapToDispatch)(App);
