import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { ModalBody, ModalFooter, Button, Row, Input } from 'reactstrap'
import { Card, CardContent, Typography, CardActions } from '@mui/material'

const SelectBook = ({ useFetchInit }) => {
  const { toggle, FetchAllBooks, selectedBooks, setSelectedBooks, searchTerm, setSearchTerm } = useFetchInit
  const { allBooks } = FetchAllBooks

  const handleBookSelection = id => {
    const book = allBooks.find(item => item.id_book === id)
    setSelectedBooks(prevBooks => [...prevBooks, book])
  }

  const normalizeString = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const filteredBooks = allBooks.filter(book => {
    const normalizedSearchTerm = normalizeString(searchTerm.toLowerCase())
    const normalizedTitle = normalizeString(book.titulo.toLowerCase())
    const normalizedGenre = normalizeString(book.genero.toLowerCase())
    return !selectedBooks.includes(book) && (normalizedTitle.includes(normalizedSearchTerm) || normalizedGenre.includes(normalizedSearchTerm))
  })

  const handleButtonClick = () => {
    toggle()
    setSearchTerm('')
  }

  return (
    <>
      <ModalBody>
        <div style={{ marginBottom: '10px' }}>
          <Input type='text' placeholder='Buscar por título o género' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <Row>
          {filteredBooks.map(item => {
            const { id_book, autor, genero, precio, titulo } = item
            return (
              <div key={id_book} style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                <Card sx={{ minWidth: 200 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                      {genero}
                    </Typography>
                    <Typography variant='h5' component='div'>
                      {titulo}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      {autor}
                    </Typography>
                    <Typography variant='body2'>{precio} €</Typography>
                  </CardContent>
                  <CardActions>
                    <Button color='success' size='sm' onClick={() => handleBookSelection(id_book)}>
                      <AddShoppingCartIcon />
                    </Button>
                  </CardActions>
                </Card>
              </div>
            )
          })}
        </Row>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <Button color='success' style={{ float: 'right' }} onClick={handleButtonClick}>
            Guardar
          </Button>
          <Button color='danger' type='button' onClick={handleButtonClick}>
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </>
  )
}

export default SelectBook
