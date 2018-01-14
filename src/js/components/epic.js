import {
    combineEpics
} from 'redux-observable';
import 'rxjs';
import {
    Observable
} from 'rxjs/Observable';

import {
    FETCH_NEWS
} from './types';

import {
    getNewsSuccess,
    getNewsFailure
} from './actions';

import API from './api';
//import Service from './errorHandler';

const fetchNewsEpic = (action$, store) =>
    action$.ofType(FETCH_NEWS)
    .mergeMap((action) =>
        Observable.fromPromise(API.getNews(action.payload.page, action.payload.size))
        .map(response => getNewsSuccess(response))
        .catch(error => Observable.of(getNewsFailure(error)))
    );

const epics = [
    fetchNewsEpic
];

const newsEpic = combineEpics(...Object.values(epics));

export default newsEpic;