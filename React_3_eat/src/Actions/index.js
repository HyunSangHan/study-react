import * as types from './ActionTypes';

export const setMovieList = (movieList) => ({
    type: types.SET_MOVIE,
    movieList
});

export const setTourList = (tourList) => ({
    type: types.SET_TOUR,
    tourList
});