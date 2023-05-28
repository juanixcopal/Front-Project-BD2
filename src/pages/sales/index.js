import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useFetchInitSales } from '../../hooks/Sales/index'
import Header from '../../components/Header/Header'
import MainModal from './modal-component/index'
import { Container, Row, Input } from 'reactstrap'
import { Button, TableContainer, Paper, styled, TableRow, TableCell, tableCellClasses, Table, TableBody, TableHead, IconButton } from '@mui/material'
import { Button as Btn } from 'reactstrap'
import DeleteIcon from '@mui/icons-material/Delete'

const Sales = () => {
  const mainHook = useFetchInitSales()
  const {
    toggle,
    selectedBooks,
    setSelectedBooks,
    FetchAllBooks,
    selectedDate,
    handleDateChange,
    Actions,
    handleBookRemoval,
    totalPriceBooks,
    FetchUserMoreSales
  } = mainHook
  const { loadingAllBooks } = FetchAllBooks
  const { userMoreSales } = FetchUserMoreSales
  const { nombre, apellido } = userMoreSales

  const { createSale } = Actions

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
    <form onSubmit={createSale}>
      <Header />
      <MainModal useFetchInit={mainHook} />
      <Container className='mt--9' fluid style={{ paddingBottom: '40px' }}>
        <div>
          <p style={{ color: 'white' }}>
            Persona con más ventas: {nombre} {apellido}
          </p>
        </div>
        <Row>
          <div className='col-xl-12 col-md-12 col-sm-12' style={{ paddingBottom: '40px', display: 'flex', justifyContent: 'space-between' }}>
            <Button disabled={loadingAllBooks} variant='contained' color='inherit' onClick={() => toggle(null, 'Añadir Libro', 'select-books')}>
              <AddShoppingCartIcon />
              Añadir Libro Al Carrito
            </Button>
            <Input type='date' style={{ width: 'auto', textAlign: 'center' }} value={selectedDate} onChange={handleDateChange} />
          </div>

          {selectedBooks.length > 0 && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Titulo</StyledTableCell>
                    <StyledTableCell align='right'>Autor</StyledTableCell>
                    <StyledTableCell align='right'>Genero</StyledTableCell>
                    <StyledTableCell align='right'>Precio Unitario</StyledTableCell>
                    <StyledTableCell align='right'>Acciones</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedBooks.map(item => {
                    const { id_book, autor, genero, precio, titulo } = item
                    return (
                      <StyledTableRow key={id_book}>
                        <StyledTableCell component='th' scope='row'>
                          {titulo}
                        </StyledTableCell>
                        <StyledTableCell align='right'>{autor}</StyledTableCell>
                        <StyledTableCell align='right'>{genero}</StyledTableCell>
                        <StyledTableCell align='right'>{precio} €</StyledTableCell>
                        <StyledTableCell align='right'>
                          <IconButton color='error' onClick={() => handleBookRemoval(id_book)}>
                            <DeleteIcon />
                          </IconButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    )
                  })}
                </TableBody>
              </Table>
              <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <strong>Total: {totalPriceBooks} €</strong>
              </div>
            </TableContainer>
          )}
          <div className='col-12'>
            <Btn disabled={selectedBooks.length === 0} color='success' type='submit' style={{ float: 'right' }}>
              Guardar
            </Btn>
            <Btn disabled={selectedBooks.length === 0} color='danger' type='button' onClick={() => setSelectedBooks([])}>
              Cancelar
            </Btn>
          </div>
        </Row>
      </Container>
    </form>
  )
}

export default Sales
