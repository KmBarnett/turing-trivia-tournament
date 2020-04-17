import { combineReducers } from 'redux';
import { user } from './user';
import { questions } from './questions';
import { answers } from './answers';

const rootReducer = combineReducers({user, questions, answers})

export default rootReducer;
