import { combineReducers } from 'redux';
import Books from './books'
import ActiveBook from './active-book'

/**
  * Global application state.
*/
const rootReducer = combineReducers({
  books: Books,
  activeBook: ActiveBook
});

export default rootReducer;
