import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const postUser = async ({ data, toggle, FetchActiveUsers }) => {
  const { _getActiveUsers } = FetchActiveUsers

  await axios
    .post(`${process.env.REACT_APP_API_BASE}/v1/users/manager`, data, {
      headers: { token: localStorage.token }
    })
    .then(({ data }) => {
      alertMessage(data, _getActiveUsers, toggle)
    })
}
