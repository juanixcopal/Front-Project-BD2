import Header from '../../components/Header/Header'
import { Container, Row } from 'reactstrap'
import { useFetchInitUsers } from '../../hooks/Users/index'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Button, IconButton } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import MainModal from './modal-component/index'

const User = () => {
  const mainHook = useFetchInitUsers()
  const { FetchActiveUsers, toggle } = mainHook
  const { activeUsers } = FetchActiveUsers

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#509aab',
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#e3f2fd'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  return (
    <>
      <Header />
      <MainModal useFetchInit={mainHook} />

      <Container className='mt--8' fluid style={{ paddingBottom: '40px' }}>
        <Row>
          <div className='col-xl-12 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
            <Button disabled={false} variant='contained' color='inherit' onClick={() => toggle(null, 'Crear Usuario', 'create-user')}>
              <PersonAddAlt1Icon />
              Crear Usuario
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell align='right'>Apellido</StyledTableCell>
                  <StyledTableCell align='right'>UserName</StyledTableCell>
                  <StyledTableCell align='right'>Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activeUsers.map(item => {
                  const { id_user, nombre, apellido, username } = item

                  return (
                    <StyledTableRow key={id_user}>
                      <StyledTableCell component='th' scope='row'>
                        {nombre}
                      </StyledTableCell>
                      <StyledTableCell align='right'>{apellido}</StyledTableCell>
                      <StyledTableCell align='right'>{username}</StyledTableCell>
                      <StyledTableCell align='right'>
                        <IconButton color='primary' onClick={() => toggle(null, 'Editar Usuario', 'update-user', item)}>
                          <ModeEditIcon />
                        </IconButton>

                        <IconButton color='error' onClick={() => toggle(null, 'Eliminar Usuario', 'delete-user', item)}>
                          <DeleteIcon />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Row>
      </Container>
    </>
  )
}

export default User
