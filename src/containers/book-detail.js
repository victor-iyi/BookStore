import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {

  render () {
    if ( !this.props.book )
      return ( <div> Select a book to get started! </div> )

    return (
      <div>
        <h3> Showing details for: </h3>
        <div> {this.props.book.title} </div>
        <div> Pages: {this.props.book.pages} </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
