import {
    combineReducers
} from 'redux';

import newsReducers from '../components/reducers';

const rootReducer = combineReducers({
    newsReducers
});

export default rootReducer;