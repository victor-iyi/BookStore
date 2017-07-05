import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// custom imports
import { selectBook } from '../actions'

// BookList container
class BookList extends Component {

	renderList() {
		return this.props.books.map( book => {
			return <li onClick={(event) => selectBook(book)}
								 key={book.key} 
								 className="list-group-item">
								 	{book.title}
							</li>
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

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)