import { useState, useEffect } from 'react'
import { getPreviousSales, getDetailsSale } from '../../data/PreviousSales/get.js'

export const useFetchPreviousSales = () => {
  const [previousSales, setPreviousSales] = useState([])
  const [loadingPreviousSales, setLoadingPreviousSales] = useState(false)

  const _getPreviousSales = async () => {
    setLoadingPreviousSales(true)
    await getPreviousSales()
      .then(({ data }) => {
        setPreviousSales(data)
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error fetch-data previous sales', response)
      })
    setLoadingPreviousSales(false)
  }

  useEffect(() => {
    _getPreviousSales()
  }, [])

  return { previousSales, loadingPreviousSales, _getPreviousSales }
}

export const useFetchDetailsSale = ({ dataModal }) => {
  const [detailsSale, setDetailsSale] = useState([])
  const [loadingDetailsSale, setLoadingDetailsSale] = useState(false)

  const _getDetailsSale = async () => {
    setLoadingDetailsSale(true)
    await getDetailsSale({ dataModal })
      .then(({ data }) => {
        setDetailsSale(data[0])
      })
      .catch(error => {
        console.log('Error', error)
      })
    setLoadingDetailsSale(false)
  }

  useEffect(() => {
    if (dataModal.params?.id_venta) {
      _getDetailsSale()
    }
    // eslint-disable-next-line
  }, [dataModal.params])

  return { detailsSale, _getDetailsSale, loadingDetailsSale }
}
