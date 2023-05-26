import axios from 'axios'

export const getAllBooks = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/sales/query`, { headers: { service: 'all-books', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
