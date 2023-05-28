import { Modal, ModalHeader } from 'reactstrap'
import CreateUser from './create-user'
import UpdateUser from './update-user'
import DeleteUser from './delete-user'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal

  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'create-user' && <CreateUser useFetchInit={useFetchInit} />}
        {component === 'update-user' && <UpdateUser useFetchInit={useFetchInit} />}
        {component === 'delete-user' && <DeleteUser useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
