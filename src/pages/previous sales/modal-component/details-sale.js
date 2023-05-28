import { ModalBody, Row } from 'reactstrap'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Typography } from '@mui/material'

const DetailsSale = ({ useFetchInit }) => {
  const { FetchDetailsSale } = useFetchInit
  const { detailsSale } = FetchDetailsSale

  const { nombreUsuario, apellidoUsuario, cantidad, fecha, total, librosVendidos } = detailsSale

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
    <ModalBody>
      <Row style={{ justifyContent: 'center' }}>
        <Typography variant='body2' style={{ paddingRight: '2px' }}>
          Nombre del Usuario: {nombreUsuario} {apellidoUsuario} ||
        </Typography>
        <Typography variant='body2' style={{ paddingRight: '2px' }}>
          Cantidad: {cantidad} ||{' '}
        </Typography>
        <Typography variant='body2' style={{ paddingRight: '2px' }}>
          Fecha: {fecha} ||{' '}
        </Typography>
        <Typography variant='body2' style={{ paddingRight: '2px' }}>
          Total: {total} € ||
        </Typography>
      </Row>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Titulo</StyledTableCell>
              <StyledTableCell align='right'>Autor</StyledTableCell>
              <StyledTableCell align='right'>Género</StyledTableCell>
              <StyledTableCell align='right'>Precio Unitario €</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {librosVendidos ? (
              librosVendidos.map(item => {
                const { id_libro, titulo, autor, genero, precio } = item

                return (
                  <StyledTableRow key={id_libro}>
                    <StyledTableCell component='th' scope='row'>
                      {titulo}
                    </StyledTableCell>
                    <StyledTableCell align='right'>{autor}</StyledTableCell>
                    <StyledTableCell align='right'>{genero}</StyledTableCell>
                    <StyledTableCell align='right'>{precio} €</StyledTableCell>
                  </StyledTableRow>
                )
              })
            ) : (
              <TableRow>
                <StyledTableCell colSpan={4}>Cargando...</StyledTableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ModalBody>
  )
}

export default DetailsSale
