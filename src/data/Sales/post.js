import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const postSale = async ({ data, setSelectedBooks }) => {
  await axios
    .post(`${process.env.REACT_APP_API_BASE}/v1/sales/manager`, data, {
      headers: { token: localStorage.token }
    })
    .then(({ data }) => {
      alertMessage(data, setSelectedBooks([]), '')
    })
}
