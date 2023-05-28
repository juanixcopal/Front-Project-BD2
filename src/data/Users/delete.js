import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const deleteUserById = async ({ dataModal, toggle, FetchActiveUsers }) => {
  const { _getActiveUsers } = FetchActiveUsers
  const { id_user } = dataModal.params

  return await axios
    .delete(`${process.env.REACT_APP_API_BASE}/v1/users/delete`, {
      headers: { service: 'delete-user', token: localStorage.getItem('token') },
      params: { id_user }
    })
    .then(({ data }) => {
      alertMessage(data, toggle, _getActiveUsers)
    })
    .catch(error => {
      throw error
    })
}
