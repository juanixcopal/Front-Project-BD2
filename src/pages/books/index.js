import Header from '../../components/Header/Header'
import { Container, Row } from 'reactstrap'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Button, IconButton } from '@mui/material'
import { useFetchInitBooks } from '../../hooks/Books/index'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'

import MainModal from './modal-component/index.js'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

const Books = () => {
  const mainHook = useFetchInitBooks()
  const { FetchTableBooks, toggle } = mainHook
  const { loadingTableBooks, tableBooks } = FetchTableBooks

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
      <Container className='mt--8' fluid style={{ paddingBottom: '40px' }}>
        <Row>
          <div className='col-xl-12 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
            <Button disabled={false} variant='contained' color='inherit' onClick={() => toggle(null, 'Crear Libro', 'create-book')}>
              <AddBusinessIcon />
              Añadir Libro
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Titulo</StyledTableCell>
                  <StyledTableCell align='right'>Autor</StyledTableCell>
                  <StyledTableCell align='right'>Genero</StyledTableCell>
                  <StyledTableCell align='right'>Cantidad Stock</StyledTableCell>
                  <StyledTableCell align='right'>Precio Unitario</StyledTableCell>
                  <StyledTableCell align='right'>Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableBooks.map((item, index) => {
                  const { autor, cantidadLibros, genero, precio, titulo } = item

                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell component='th' scope='row'>
                        {titulo}
                      </StyledTableCell>
                      <StyledTableCell align='right'>{autor}</StyledTableCell>
                      <StyledTableCell align='right'>{genero}</StyledTableCell>
                      <StyledTableCell align='right'>{cantidadLibros}</StyledTableCell>
                      <StyledTableCell align='right'>{precio} €</StyledTableCell>
                      <StyledTableCell align='right'>
                        <IconButton color='primary' disabled={loadingTableBooks} onClick={() => toggle(null, 'Todos los libros', 'view-all-book', item)}>
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

export default Books
