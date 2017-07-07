import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// custom imports
import { selectBook } from '../actions'

/**
	* NOTE:
	* Containers are Components that have direct
	* connection with the application state
	* And only the most parent Component that
	* cares about A PARTICULAR PIECE OF STATE should be promoted
*/

// BookList container
class BookList extends Component {

	renderList() {
		return this.props.books.map( book => {
			return (
				<li onClick={(event) => selectBook(book)}
						key={book.key}
						className="list-group-item">
					{book.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group">
				{this.renderList()}
			</ul>
		)
	}
}

/**
	* NOTE:
	* You can think of mapStateToProps as properties
	* and mapDispatchToProps as methods
	* we are passing from the app state to react
	* this is where react connects with redux
*/

// takes the application state as args
// and gives BookList the state it cares about
// whatever we return from this will show up as this.props
const mapStateToProps = (state) => {
	return {
		books: state.books // list of books from our app state
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
