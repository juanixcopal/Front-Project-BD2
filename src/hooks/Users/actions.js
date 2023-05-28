import { putUser } from '../../data/Users/put.js'
import { postUser } from '../../data/Users/post.js'
import { deleteUserById } from '../../data/Users/delete.js'

export const useActions = ({ data, dataModal, toggle, FetchActiveUsers, formValues }) => {
  const updateUser = async e => {
    e.preventDefault()

    putUser({ formValues, dataModal, toggle, FetchActiveUsers })
  }

  const createUser = async e => {
    e.preventDefault()

    postUser({ data, toggle, FetchActiveUsers })
  }

  const deleteUser = async e => {
    e.preventDefault()

    deleteUserById({ dataModal, toggle, FetchActiveUsers })
  }

  return { updateUser, createUser, deleteUser }
}
