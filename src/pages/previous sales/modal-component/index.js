import { Modal, ModalHeader } from 'reactstrap'
import DetailsSale from './details-sale'

const MainModal = ({ useFetchInit }) => {
  const { dataModal, toggle } = useFetchInit
  const { open, title, component } = dataModal

  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered={true} size='lg' className='modal-body'>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {component === 'details-sale' && <DetailsSale useFetchInit={useFetchInit} />}
      </Modal>
    </>
  )
}

export default MainModal
