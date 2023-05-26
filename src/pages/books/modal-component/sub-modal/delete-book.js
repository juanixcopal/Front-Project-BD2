import { ModalBody, ModalFooter, Button } from 'reactstrap'
import { Typography } from '@mui/material'
import { styled } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const DeleteBook = ({ useFetchInit }) => {
  const StyledErrorOutlineIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
    fontSize: 90,
    color: theme.palette.warning.main,
    margin: 'auto',
    display: 'block'
  }))

  const StyledTypography = styled(Typography)(() => ({
    textAlign: 'center'
  }))

  const { subToggle, dataSubModal, Actions } = useFetchInit

  const { deleteBook } = Actions

  // const { id_book } = dataSubModal.subParams

  // console.log(id_book)
  return (
    <>
      <form onSubmit={deleteBook}>
        <ModalBody>
          <StyledErrorOutlineIcon />
          <StyledTypography variant='h6' gutterBottom>
            ¿Deseas eliminar este libro?
          </StyledTypography>
        </ModalBody>
        <ModalFooter>
          <div className='col-12'>
            <Button disabled={false} color='success' type='submit' style={{ float: 'right' }}>
              Eliminar
            </Button>
            <Button disabled={false} color='danger' type='button' onClick={subToggle}>
              Cancelar
            </Button>
          </div>
        </ModalFooter>
      </form>
    </>
  )
}

export default DeleteBook
