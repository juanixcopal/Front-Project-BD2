import { useState, useEffect } from 'react'
import { getAllBooks } from '../../data/Sales/get.js'

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
        console.log('Error fetch-data armarios', response)
      })
    setLoadingAllBooks(false)
  }

  useEffect(() => {
    _getAllBooks()
  }, [])

  return { allBooks, loadingAllBooks, _getAllBooks }
}
