import {
    createAction
} from 'redux-actions';

import {
    FETCH_NEWS,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
} from './types';

export const getNews = createAction(FETCH_NEWS);
export const getNewsSuccess = createAction(FETCH_NEWS_SUCCESS);
export const getNewsFailure = createAction(FETCH_NEWS_FAILURE);