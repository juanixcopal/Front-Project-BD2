import { Modal, ModalHeader } from 'reactstrap'
import ModifyBook from './modify-book'
import DeleteBook from './delete-book'

const SubMainModal = ({ useFetchInit }) => {
  const { dataSubModal, subToggle } = useFetchInit
  const { subOpen, subTitle, subComponent } = dataSubModal

  return (
    <>
      <Modal isOpen={subOpen} toggle={subToggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={subToggle}>{subTitle}</ModalHeader>
        {subComponent === 'modify-book' && <ModifyBook useFetchInit={useFetchInit} />}
        {subComponent === 'delete-book' && <DeleteBook useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default SubMainModal
