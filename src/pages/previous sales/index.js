import Header from '../../components/Header/Header'
import { Container, Row } from 'reactstrap'
import { useFetchInitPreviousSales } from '../../hooks/PreviousSales/index'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, IconButton } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import MainModal from './modal-component/index'

const PreviousSales = () => {
  const mainHook = useFetchInitPreviousSales()
  const { FetchPreviousSales, toggle } = mainHook
  const { previousSales, loadingPreviousSales } = FetchPreviousSales

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
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  return (
    <>
      <Header />
      <MainModal useFetchInit={mainHook} />
      <Container className='mt--9' fluid style={{ paddingBottom: '40px' }}>
        <Row>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Fecha</StyledTableCell>
                  <StyledTableCell align='center'>Cantidad de Libros</StyledTableCell>
                  <StyledTableCell align='right'>Total €</StyledTableCell>
                  <StyledTableCell align='right'>Vendido por</StyledTableCell>
                  <StyledTableCell align='right'>Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {previousSales.map(item => {
                  const { id_venta, fecha, cantidad, total, nombreUsuario, apellidoUsuario } = item

                  const fullName = nombreUsuario + ' ' + apellidoUsuario

                  return (
                    <StyledTableRow key={id_venta}>
                      <StyledTableCell component='th' scope='row'>
                        {fecha}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{cantidad}</StyledTableCell>
                      <StyledTableCell align='right'>{total} €</StyledTableCell>
                      <StyledTableCell align='right'>{fullName}</StyledTableCell>
                      <StyledTableCell align='right'>
                        <IconButton color='primary' disabled={loadingPreviousSales} onClick={() => toggle(null, 'Detalles de la venta', 'details-sale', item)}>
                          <RemoveRedEyeIcon />
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

export default PreviousSales
