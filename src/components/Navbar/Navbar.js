import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Navbar, Nav, Container, Media } from 'reactstrap'

import { Avatar } from '@mui/material'

const Neo4SixNavbar = props => {
  const name = localStorage.getItem('name')

  const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  //Da error cuando se cierra sesión
  // const FirstLetter = name.charAt(0).toUpperCase()

  return (
    <>
      <Navbar className='navbar-top navbar-dark' expand='md' id='navbar-main'>
        <Container fluid>
          <h2 className='mb-0 text-white text-uppercase d-none d-lg-inline-block'>{props.brandText}</h2>
          <Nav className='align-items-center d-none d-md-flex' navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className='pr-0' nav>
                <Media className='align-items-center'>
                  <span className='avatar avatar-sm rounded-circle'>
                    <Avatar />
                  </span>
                  <Media className='ml-2 d-lg-block'>
                    <span className='mb-0 text-sm font-weight-bold'>{name || 'User'}</span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu-arrow' right>
                <DropdownItem divider />
                <DropdownItem href='#Logout' onClick={logout}>
                  <i className='ni ni-user-run' />
                  <span>Cerrar Sesión</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Neo4SixNavbar
