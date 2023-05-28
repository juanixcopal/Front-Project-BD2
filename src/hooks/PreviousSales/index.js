import { useState } from 'react'
import { useFetchPreviousSales, useFetchDetailsSale } from './fetch-data'
import { defaultDataModal } from './default-data'

export const useFetchInitPreviousSales = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const FetchPreviousSales = useFetchPreviousSales()
  const FetchDetailsSale = useFetchDetailsSale({ dataModal })

  return {
    FetchPreviousSales,
    dataModal,
    toggle,
    FetchDetailsSale
  }
}
