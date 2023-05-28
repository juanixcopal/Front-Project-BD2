import { useState } from 'react'
import { useFetchAllBooks, useFetchUserMoreSales } from './fetch-data'
import { defaultDataModal } from './default-data'
import { useActions } from './actions.js'

export const useFetchInitSales = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [selectedBooks, setSelectedBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const currentDate = new Date().toISOString().split('T')[0]

  const [selectedDate, setSelectedDate] = useState(currentDate)

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const getTotalPrice = () => {
    return selectedBooks.reduce((total, book) => total + parseFloat(book.precio.replace(',', '.')), 0)
  }

  const totalPriceBooks = getTotalPrice().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, decimal: ',' })

  const getSelectedBookIds = () => {
    return selectedBooks.map(book => book.id_book)
  }

  const selectedBookIds = getSelectedBookIds()

  const handleDateChange = e => {
    setSelectedDate(e.target.value)
  }

  const handleBookRemoval = id => {
    setSelectedBooks(prevBooks => prevBooks.filter(book => book.id_book !== id))
  }

  const FetchAllBooks = useFetchAllBooks()
  const FetchUserMoreSales = useFetchUserMoreSales()
  const Actions = useActions({ selectedDate, selectedBookIds, totalPriceBooks, setSelectedBooks })

  return {
    FetchAllBooks,
    toggle,
    dataModal,
    selectedBooks,
    setSelectedBooks,
    searchTerm,
    setSearchTerm,
    selectedDate,
    handleDateChange,
    Actions,
    handleBookRemoval,
    totalPriceBooks,
    FetchUserMoreSales
  }
}
