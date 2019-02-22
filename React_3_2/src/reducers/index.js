import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다.
const initialState = {

    number :0 ,
    restList: [],

};

function counter(state = initialState, action) {
    // 레퍼런스 생성
    const { number } = state;

    switch (action.type) {

        case types.INCREMENT:
            return {
                number : number +1,
            };
        case types.DECREMENT:
            return{
                number : number -1,
                restList : action.item,

            };
        default:
            return state;
    }
}

export default counter;