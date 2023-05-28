import { useState, useEffect } from 'react'
import { getAllBooks, getUserMoreSales } from '../../data/Sales/get.js'

export const useFetchAllBooks = () => {
  const [allBooks, setAllBooks] = useState([])
  const [loadingAllBooks, setLoadingAllBooks] = useState(false)

  const _getAllBooks = async () => {
    setLoadingAllBooks(true)
    await getAllBooks()
      .then(({ data }) => {
        setAllBooks(data)
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error fetch-data all books', response)
      })
    setLoadingAllBooks(false)
  }

  useEffect(() => {
    _getAllBooks()
  }, [])

  return { allBooks, loadingAllBooks, _getAllBooks }
}

export const useFetchUserMoreSales = () => {
  const [userMoreSales, setUserMoreSales] = useState([])
  const [loadingUserMoreSales, setLoadingUserMoreSales] = useState(false)

  const _getUserMoreSales = async () => {
    setLoadingUserMoreSales(true)
    await getUserMoreSales()
      .then(({ data }) => {
        setUserMoreSales(data[0])
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error fetch-data user more sales', response)
      })
    setLoadingUserMoreSales(false)
  }

  useEffect(() => {
    _getUserMoreSales()
  }, [])

  return { userMoreSales, loadingUserMoreSales, _getUserMoreSales }
}
