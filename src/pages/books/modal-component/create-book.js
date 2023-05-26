import { ModalBody, ModalFooter } from 'reactstrap'
import { TextField } from '@mui/material'
import { Button } from 'reactstrap'

const CreateBook = ({ useFetchInit }) => {
  const { toggle, handleInputChange, FetchTableBooks, Actions } = useFetchInit
  const { loadingTableBooks } = FetchTableBooks
  const { createBook } = Actions
  return (
    <form onSubmit={createBook}>
      <ModalBody>
        <div>
          <TextField margin='dense' required fullWidth label='Titulo' name='title' type='text' onChange={handleInputChange} />
          <TextField margin='normal' required fullWidth label='Autor' name='author' type='text' onChange={handleInputChange} />
          <TextField margin='normal' required fullWidth label='Genero' name='gender' type='text' onChange={handleInputChange} />
          <TextField margin='normal' required fullWidth label='Cantidad' name='amount' type='number' onChange={handleInputChange} />
          <TextField margin='normal' required fullWidth label='Precio' name='price' type='text' onChange={handleInputChange} />
        </div>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <Button disabled={loadingTableBooks} color='success' type='submit' style={{ float: 'right' }}>
            Guardar
          </Button>
          <Button disabled={loadingTableBooks} color='danger' type='button' onClick={toggle}>
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default CreateBook
