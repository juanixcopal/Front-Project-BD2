import axios from 'axios'

export const getActiveUsers = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/users/query`, { headers: { service: 'active-users', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
