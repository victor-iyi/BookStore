import { combineReducers } from 'redux';
import BooksReducer from './books-reducer'

/**
  * Global application state.
*/
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
