import { useState } from 'react'
import { useFetchTableBooks, useFetchAllBooksByTitleAuthor } from './fetch-data'
import { defaultDataModal, defaultData, defaultDataSubModal } from './dafault-data'
import { useActions } from './actions.js'

export const useFetchInitBooks = () => {
  const [data, setData] = useState(defaultData)
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [dataSubModal, setDataSubModal] = useState(defaultDataSubModal)

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const subToggle = (_, subTitle, subComponent, subParams) => {
    setDataSubModal({
      ...dataSubModal,
      subOpen: !dataSubModal.subOpen,
      subTitle,
      subComponent,
      subParams
    })
  }

  const handleInputChange = event => {
    let value = event.target.value

    if (event.target.name === 'amount') {
      value = parseInt(value, 10)
    }

    setData({ ...data, [event.target.name]: value })
  }

  const FetchTableBooks = useFetchTableBooks()
  const FetchAllBooksByTitleAuthor = useFetchAllBooksByTitleAuthor({ dataModal })
  const Actions = useActions({ data, toggle, FetchTableBooks, subToggle, dataSubModal, FetchAllBooksByTitleAuthor })

  return {
    FetchTableBooks,
    dataModal,
    toggle,
    handleInputChange,
    data,
    Actions,
    FetchAllBooksByTitleAuthor,
    subToggle,
    dataSubModal
  }
}
