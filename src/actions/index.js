/**
	* NOTE:
	* All action creators must return an object
	* the object must have the property: `type` & `payload`
	* `type` describes the purpose of the action.
	*	`payload` further describes the condition of the action that's been triggered.
*/

export function selectBook(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}
