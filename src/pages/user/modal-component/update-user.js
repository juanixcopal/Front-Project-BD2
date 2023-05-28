import { ModalBody, ModalFooter, Button } from 'reactstrap'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

const UpdateUser = ({ useFetchInit }) => {
  const { toggle, dataModal, showPassword, handleTogglePasswordVisibility, Actions, handleChange } = useFetchInit

  const { nombre, apellido, username } = dataModal.params

  const { updateUser } = Actions

  return (
    <form onSubmit={updateUser}>
      <ModalBody>
        <TextField margin='dense' fullWidth label='Nombre' name='name' type='text' defaultValue={nombre} onChange={handleChange} />
        <TextField margin='dense' fullWidth label='Apellido' name='lastname' type='text' defaultValue={apellido} onChange={handleChange} />
        <TextField margin='dense' fullWidth label='Username' name='username' type='text' defaultValue={username} onChange={handleChange} />
        <TextField
          margin='dense'
          fullWidth
          label='Contraseña'
          name='password'
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleTogglePasswordVisibility}>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>
              </InputAdornment>
            )
          }}
        />
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <Button disabled={false} color='success' type='submit' style={{ float: 'right' }}>
            Guardar
          </Button>
          <Button disabled={false} color='danger' type='button' onClick={toggle}>
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </form>
  )
}

export default UpdateUser
