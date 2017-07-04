import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// custom imports
import { selectBook }  from '../actions/index'

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
						<li 
							key={book.title} 
							onClick={() => this.props.selectBook(book)}
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

// takes care of application state ( reducers )
const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

// takes care of user actions ( actions )
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// Promote BookList from a dummy component to a smart component (container)
// BookList needs to know about the property and method (books&selectedBook)
// make them available as `this.props`
export default connect(mapStateToProps, mapDispatchToProps)(BookList)