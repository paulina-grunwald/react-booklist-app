import React, {Component} from 'react';
import {connect} from 'react-redux'
import { selectBook } from '../actions/actionCreator_selectBook'
import { bindActionCreators } from 'redux'
class BookList extends Component {

  renderList() {
    return this.props.books.map(book=> {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
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

//Anything returned from this function will be availavle as props
// in the BookList Container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result
  // should be passed to all reducers
  return bindActionCreators({selectBook: selectBook},dispatch)
}

// connect() function component to be connected to the store

export default connect(mapStateToProps,mapDispatchToProps)(BookList);