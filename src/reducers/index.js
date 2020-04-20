import { combineReducers } from 'redux';
import { user } from './user';
import { questions } from './questions';
import { answers } from './answers';
import { scores } from './scores';
import { time } from './time';
import { categories } from './categories';
import { category } from './category';

const rootReducer = combineReducers({
  user,
  questions,
  answers,
  scores,
  time,
  category,
  categories
})

export default rootReducer;
