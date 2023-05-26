import { Modal, ModalHeader } from 'reactstrap'
import CreateBook from './create-book'
import ViewAllBooks from './view-all-books'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal

  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'create-book' && <CreateBook useFetchInit={useFetchInit} />}
        {component === 'view-all-book' && <ViewAllBooks useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
