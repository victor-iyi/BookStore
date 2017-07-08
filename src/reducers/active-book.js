/*
 * NOTE:
 * All reducers always take two arguements
 * state:
 * action:
 * Redux will throw an error if our state is undefined
 * That's why we initally set our state to null
 * We should never mutate the state coming into our reducers
*/
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload //
  }
  return state // the current state
}
