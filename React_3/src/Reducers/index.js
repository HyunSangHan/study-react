import * as types from '../Actions/ActionTypes';

// 초기 상태를 정의합니다.
const initialState = {
    color : 'black',
    number : 0
};

function babo(state = initialState, action) {
    console.log(action)

    switch(action.type) {
        case types.INCREMENT:
            return {
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                number: state.number - 1
            };
        case types.SET_COLOR:
            return {
                color: action.color, //?
                number: state.number -1 //과연?
//                number: state.number +10 //실험용
            };
        default:
            return state;
    }

}

export default babo;