import * as types from '../Actions/ActionTypes';

// 초기 상태를 정의합니다.
const initialState = {
    movieList: [],
    tourList: []
};

function babo(state = initialState, action) {
    // console.log(action)

    switch(action.type) {
        case types.SET_MOVIE:
            return {
                movieList: action.movieList,
                tourList: state.tourList,
                color: state.color,
                number: state.number
            };
        case types.SET_TOUR:
            return {
                tourList: action.tourList,
                movieList: state.movieList,
                color: state.color,
                number: state.number
            };

        default:
            return state;
    }

}

export default babo;