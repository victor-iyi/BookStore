// selectBook action creator
export function selectBook(book) {
	console.log(`A book has been selected: ${book.title}`)
	return book.title
}