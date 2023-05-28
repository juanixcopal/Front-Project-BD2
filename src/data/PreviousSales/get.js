import axios from 'axios'

export const getPreviousSales = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/previousSales/query`, { headers: { service: 'previous-sales', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getDetailsSale = async ({ dataModal }) => {
  const { id_venta } = dataModal.params

  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/previousSales/query`, {
      headers: { service: 'details-sale', token: localStorage.getItem('token') },
      params: { id_venta: id_venta }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
