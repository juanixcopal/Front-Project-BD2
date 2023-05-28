import { postBook } from '../../data/Books/post.js'
import { deleteBookById } from '../../data/Books/delete.js'
import { putBook } from '../../data/Books/put.js'

export const useActions = ({ data, toggle, FetchTableBooks, subToggle, dataSubModal, FetchAllBooksByTitleAuthor, formValues }) => {
  const createBook = async e => {
    e.preventDefault()

    postBook({ data, toggle, FetchTableBooks })
  }

  const deleteBook = async e => {
    e.preventDefault()
    const { id_book } = dataSubModal.subParams

    deleteBookById({ id_book, subToggle, FetchTableBooks, FetchAllBooksByTitleAuthor })
  }

  const updateBook = async e => {
    e.preventDefault()

    const { id_book } = dataSubModal.subParams

    putBook({ id_book, formValues, subToggle, FetchTableBooks, FetchAllBooksByTitleAuthor })
  }

  return { createBook, deleteBook, updateBook }
}
