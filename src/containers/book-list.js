import React, {Component} from 'react';
import {connect} from 'react-redux'

class BookList extends Component {

  renderList() {
    return this.props.books.map(book=> {
      return (
        <li
        key={book.title}
       
        className="list-group-item"
      >
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {

  return {
  // What is returned from this function will be available 
  // as a prop inside BookList component 
  // Specify exactly which slice of the state we want to provide to our component
  books: state.books

  }
}

// connect() function component to be connected to the store

export default connect(mapStateToProps)(BookList);