import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const putUser = async ({ formValues, dataModal, toggle, FetchActiveUsers }) => {
  const { id_user } = dataModal.params
  const { _getActiveUsers } = FetchActiveUsers

  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/users/update`, formValues, {
      headers: {
        service: 'update-user',
        token: localStorage.token
      },
      params: {
        id_user
      }
    })
    .then(({ data }) => {
      alertMessage(data, _getActiveUsers, toggle)
    })
}
