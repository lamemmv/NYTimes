import { combineEpics } from 'redux-observable';
import newsEpic from '../components/epic';
const epics = [
    newsEpic
];

const rootEpics = combineEpics(...Object.values(epics));

export default rootEpics;