import { Button, Container, Card, CardContent, Box, Typography, TextField } from '@mui/material'
import Logo from '../../images/neo4sixLogo.png'
import { useFetchInitLogin } from '../../hooks/Login/index'
const Login = () => {
  const FetchInitLogin = useFetchInitLogin()

  const { handleInputChange, login, message, loading } = FetchInitLogin

  const { message: _message, result } = message

  return (
    <>
      <Container component='main' maxWidth='xs' style={{ paddingTop: '8%' }}>
        <Card style={{ borderRadius: '5%', background: '#F7F7F7' }}>
          <CardContent>
            <Box
              sx={{
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <img src={Logo} alt='Logo Neo4Six' width={400} />

              <Typography component='h1' variant='h5' color='#1e8087'>
                Iniciar Sesión
              </Typography>

              <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={login}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  // id='username'
                  label='Usuario'
                  name='username'
                  autoComplete='username'
                  onChange={handleInputChange}
                  autoFocus
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Contraseña'
                  type='password'
                  // id='password'
                  autoComplete='current-password'
                  onChange={handleInputChange}
                />
                {loading ? (
                  <span className='text-success'>Ingresando.........</span>
                ) : (
                  <span className={`text-${result ? 'success' : 'danger'}`}>{_message}</span>
                )}
                <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Acceder
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default Login
