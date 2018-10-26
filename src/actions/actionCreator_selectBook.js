// this is Action creator it returns
// action that has type and payload

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }

}