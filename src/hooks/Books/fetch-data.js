import { useState, useEffect } from 'react'
import { getTableBooks, getAllBooksByTitleAuthor } from '../../data/Books/get.js'

export const useFetchTableBooks = () => {
  const [tableBooks, setTableBooks] = useState([])
  const [loadingTableBooks, setLoadingTableBooks] = useState(false)

  const _getTableBooks = async () => {
    setLoadingTableBooks(true)
    await getTableBooks()
      .then(({ data }) => {
        setTableBooks(data)
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error fetch-data armarios', response)
      })
    setLoadingTableBooks(false)
  }

  useEffect(() => {
    _getTableBooks()
  }, [])
  return { tableBooks, loadingTableBooks, _getTableBooks }
}

export const useFetchAllBooksByTitleAuthor = ({ dataModal }) => {
  const [allBooksByTitle, setAllBooksByTitle] = useState([])
  const [loadingAllBooks, setLoadingAllBooks] = useState(false)

  const _getAllBooksByTitleAuthor = async () => {
    setLoadingAllBooks(true)
    await getAllBooksByTitleAuthor({ dataModal })
      .then(({ data }) => {
        setAllBooksByTitle(data)
      })
      .catch(error => {
        console.log('Error', error)
      })
    setLoadingAllBooks(false)
  }

  useEffect(() => {
    if (dataModal.params?.titulo && dataModal.params?.autor) {
      _getAllBooksByTitleAuthor()
    }
    // eslint-disable-next-line
  }, [dataModal.params])
  return { allBooksByTitle, loadingAllBooks, _getAllBooksByTitleAuthor }
}
