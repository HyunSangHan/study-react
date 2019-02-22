/*
    actions 객체를 만드는 액션 생성 함수들을 선언합니다(actions creators).
    여기서 () => ({})은 function() { return { } }와 동일한 의미입니다.
*/

import * as types from './ActionTypes';

export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index,

});
export const setRestList = (restList) => ({
    type: types.SET_REST_LIST,
    item : restList,

});