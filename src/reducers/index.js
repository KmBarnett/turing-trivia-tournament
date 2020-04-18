import { combineReducers } from 'redux';
import { user } from './user';
import { questions } from './questions';
import { answers } from './answers';
import { scores } from './scores';
import { time } from './time';

const rootReducer = combineReducers({user, questions, answers, scores, time})

export default rootReducer;
