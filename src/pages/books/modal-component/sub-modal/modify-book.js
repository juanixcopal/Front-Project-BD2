import { ModalBody, ModalFooter } from 'reactstrap'
import { TextField } from '@mui/material'
import { Button } from 'reactstrap'

const ModifyBook = ({ useFetchInit }) => {
  const { dataSubModal, subToggle, handleChange, Actions } = useFetchInit

  const { updateBook } = Actions

  const { subParams } = dataSubModal

  const { titulo, autor, genero, precio } = subParams

  return (
    <form onSubmit={updateBook}>
      <ModalBody>
        <div>
          <TextField margin='dense' fullWidth label='Titulo' name='title' type='text' defaultValue={titulo} onChange={handleChange} />
          <TextField margin='normal' fullWidth label='Autor' name='author' type='text' defaultValue={autor} onChange={handleChange} />
          <TextField margin='normal' fullWidth label='Genero' name='gender' type='text' defaultValue={genero} onChange={handleChange} />
          <TextField margin='normal' fullWidth label='Precio' name='price' type='text' defaultValue={precio} onChange={handleChange} />
        </div>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <Button
            // disabled={loadingTableBooks}
            color='success'
            type='submit'
            style={{ float: 'right' }}
          >
            Guardar
          </Button>
          <Button
            // disabled={loadingTableBooks}
            color='danger'
            type='button'
            onClick={subToggle}
          >
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default ModifyBook
