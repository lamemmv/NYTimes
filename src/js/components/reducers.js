import { handleActions } from 'redux-actions';
import {
    FETCH_NEWS,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE
} from './types';

const initialState = {
    items: [],
    page: 1,
    loading: false,
    error: null
};

export default handleActions({
    [FETCH_NEWS]: (state, action) => {
        return Object.assign({}, state, {
            items: [],
            page: action.payload.page,
            error: null,
            loading: true
        });
    },
    [FETCH_NEWS_SUCCESS]: (state, action) => {
        return Object.assign({}, state, {
            items: action.payload.data.response.docs ? action.payload.data.response.docs : [],
            page: action.payload.page,
            error: null,
            loading: false
        });
    },
    [FETCH_NEWS_FAILURE]: (state, action) => {
        let error = action.payload || {
            message: action.payload.message
        }
        return Object.assign({}, state, {
            items: [],
            page: action.payload.page,
            error: error,
            loading: false
        });
    },
}, initialState);