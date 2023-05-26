import { postBook } from '../../data/Books/post.js'
import { deleteBookById } from '../../data/Books/delete.js'

export const useActions = ({ data, toggle, FetchTableBooks, subToggle, dataSubModal, FetchAllBooksByTitleAuthor }) => {
  const createBook = async e => {
    e.preventDefault()

    postBook({ data, toggle, FetchTableBooks })
  }

  const deleteBook = async e => {
    e.preventDefault()
    const { id_book } = dataSubModal.subParams

    deleteBookById({ id_book, subToggle, FetchTableBooks, FetchAllBooksByTitleAuthor })
  }

  return { createBook, deleteBook }
}
