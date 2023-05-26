import Header from '../../components/Header/Header'
import { Container, Row } from 'reactstrap'
import { InputLabel, FormControl, Select, MenuItem, Typography } from '@mui/material'
import { useFetchInitSales } from '../../hooks/Sales/index'

const Sales = () => {
  const mainHook = useFetchInitSales()
  const { FetchAllBooks } = mainHook
  const { allBooks } = FetchAllBooks

  return (
    <>
      <Header />
      <Container className='mt--8' fluid>
        <Row>
          <div className='col-xl-12 col-md-12 col-sm-12' style={{ paddingBottom: '40px' }}>
            <FormControl fullWidth>
              <InputLabel>Libro</InputLabel>
              <Select label='Carrito de Chromebook' required>
                {allBooks.map(item => {
                  const { id_book, titulo, precio } = item
                  return (
                    <MenuItem key={id_book}>
                      <Typography>Titulo: </Typography>
                      {titulo}
                      <Typography style={{ paddingRight: '4px', paddingLeft: '4px' }}>Precio:</Typography>
                      {precio}€
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Sales
