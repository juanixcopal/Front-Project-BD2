import { ModalBody } from 'reactstrap'
import { Row } from 'reactstrap'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import SubMainModal from './sub-modal/index.js'

const ViewAllBooks = ({ useFetchInit }) => {
  const { FetchAllBooksByTitleAuthor, subToggle } = useFetchInit

  const { allBooksByTitle } = FetchAllBooksByTitleAuthor

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
      <SubMainModal useFetchInit={useFetchInit} />
      <ModalBody>
        <Row>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Titulo</StyledTableCell>
                  <StyledTableCell align='right'>Autor</StyledTableCell>
                  <StyledTableCell align='right'>Genero</StyledTableCell>
                  <StyledTableCell align='right'>Precio</StyledTableCell>
                  <StyledTableCell align='right'>Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allBooksByTitle.map(item => {
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
                        <IconButton color='primary' onClick={() => subToggle(null, 'Modificar Libro', 'modify-book', item)}>
                          <ModeEditIcon />
                        </IconButton>

                        <IconButton color='error' onClick={() => subToggle(null, 'Eliminar Libro', 'delete-book', item)}>
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
      </ModalBody>
    </>
  )
}

export default ViewAllBooks
