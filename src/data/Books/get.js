import axios from 'axios'

export const getTableBooks = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/books/query`, { headers: { service: 'books', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getAllBooksByTitleAuthor = async ({ dataModal }) => {
  const { titulo, autor } = dataModal.params
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/books/query`, {
      headers: { service: 'all-books', token: localStorage.getItem('token') },
      params: { title: titulo, author: autor }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
