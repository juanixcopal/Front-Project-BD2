import { ModalBody, ModalFooter, Button } from 'reactstrap'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

const CreateUser = ({ useFetchInit }) => {
  const { toggle, handleInputChange, handleTogglePasswordVisibility, showPassword, Actions } = useFetchInit
  const { createUser } = Actions
  return (
    <form onSubmit={createUser}>
      <ModalBody>
        <div>
          <TextField margin='dense' required fullWidth label='Nombre' name='name' type='text' onChange={handleInputChange} />
          <TextField margin='normal' required fullWidth label='Apellido' name='lastname' type='text' onChange={handleInputChange} />
          <TextField margin='normal' required fullWidth label='Username' name='username' type='text' onChange={handleInputChange} />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Contraseña'
            name='password'
            type={showPassword ? 'text' : 'password'}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleTogglePasswordVisibility}>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>
                </InputAdornment>
              )
            }}
          />
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
            onClick={toggle}
          >
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default CreateUser
