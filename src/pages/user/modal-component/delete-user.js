import { ModalBody, ModalFooter, Button } from 'reactstrap'
import { Typography } from '@mui/material'
import { styled } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const DeleteUser = ({ useFetchInit }) => {
  const StyledErrorOutlineIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
    fontSize: 90,
    color: theme.palette.warning.main,
    margin: 'auto',
    display: 'block'
  }))

  const StyledTypography = styled(Typography)(() => ({
    textAlign: 'center'
  }))

  const { toggle, Actions } = useFetchInit

  const { deleteUser } = Actions

  return (
    <>
      <form onSubmit={deleteUser}>
        <ModalBody>
          <StyledErrorOutlineIcon />
          <StyledTypography variant='h6' gutterBottom>
            ¿Deseas eliminar este Usuario?
          </StyledTypography>
        </ModalBody>
        <ModalFooter>
          <div className='col-12'>
            <Button disabled={false} color='success' type='submit' style={{ float: 'right' }}>
              Eliminar
            </Button>
            <Button disabled={false} color='danger' type='button' onClick={toggle}>
              Cancelar
            </Button>
          </div>
        </ModalFooter>
      </form>
    </>
  )
}

export default DeleteUser
