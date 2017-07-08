import React, { Component } from 'react';
import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Book Store</h2>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
