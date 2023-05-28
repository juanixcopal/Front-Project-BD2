import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const putBook = async ({ id_book, formValues, subToggle, FetchTableBooks, FetchAllBooksByTitleAuthor }) => {
  const { _getTableBooks } = FetchTableBooks
  const { _getAllBooksByTitleAuthor } = FetchAllBooksByTitleAuthor
  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/books/update`, formValues, {
      headers: {
        service: 'update-book',
        token: localStorage.token
      },
      params: {
        id_book
      }
    })
    .then(({ data }) => {
      alertMessage(data, subToggle, _getAllBooksByTitleAuthor, _getTableBooks)
    })
}
