import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const postBook = async ({ data, toggle, FetchTableBooks }) => {
  const { _getTableBooks } = FetchTableBooks
  await axios
    .post(`${process.env.REACT_APP_API_BASE}/v1/books/manager`, data, {
      headers: { token: localStorage.token }
    })
    .then(({ data }) => {
      alertMessage(data, _getTableBooks, toggle)
    })
}
