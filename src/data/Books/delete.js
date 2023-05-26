import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const deleteBookById = async ({ id_book, subToggle, FetchTableBooks, FetchAllBooksByTitleAuthor }) => {
  const { _getAllBooksByTitleAuthor } = FetchAllBooksByTitleAuthor
  const { _getTableBooks } = FetchTableBooks
  return await axios
    .delete(`${process.env.REACT_APP_API_BASE}/v1/books/delete`, {
      headers: { service: 'delete-book', token: localStorage.getItem('token') },
      params: { id_book: id_book }
    })
    .then(({ data }) => {
      alertMessage(data, subToggle, _getTableBooks, _getAllBooksByTitleAuthor)
    })
    .catch(error => {
      throw error
    })
}
