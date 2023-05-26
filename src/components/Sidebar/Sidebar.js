import { useState } from 'react'
import { NavLink as NavLinkRRD, Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap'

const Sidebar = props => {
  const fullName = localStorage.getItem('username')

  const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  const [collapseOpen, setCollapseOpen] = useState()

  const toggleCollapse = () => {
    setCollapseOpen(data => !data)
  }
  const closeCollapse = () => {
    setCollapseOpen(false)
  }
  const createLinks = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/neo4six') {
        return (
          <NavItem key={key}>
            <NavLink to={prop.layout + prop.path} tag={NavLinkRRD} onClick={closeCollapse} activeClassName='active'>
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
          </NavItem>
        )
      } else {
        return null
      }
    })
  }

  const { routes, logo } = props
  let navbarBrandProps
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link
    }
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: '_blank'
    }
  }

  return (
    <Navbar className='navbar-vertical fixed-left navbar-light bg-white' expand='md' id='sidenav-main'>
      <Container fluid>
        <button className='navbar-toggler' type='button' onClick={toggleCollapse}>
          <span className='navbar-toggler-icon' />
        </button>
        {logo ? (
          <NavbarBrand className='pt-0' {...navbarBrandProps}>
            <img alt={logo.imgAlt} className='navbar-brand-img' src={logo.imgSrc} />
          </NavbarBrand>
        ) : null}
        <Nav className='align-items-center d-md-none'>
          <UncontrolledDropdown nav>
            <DropdownToggle className='pr-0' nav>
              <Media className='align-items-center'>
                <Media className='ml-2 d-lg-block'>
                  <span className='mb-0 text-sm font-weight-bold'>{fullName || 'User'}</span>
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
        <Collapse navbar isOpen={collapseOpen}>
          <div className='navbar-collapse-header d-md-none'>
            <Row>
              {logo ? (
                <Col className='collapse-brand' xs='6'>
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className='collapse-close' xs='6'>
                <button className='navbar-toggler' type='button' onClick={toggleCollapse}>
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>{createLinks(routes)}</Nav>
          <hr className='my-3' />
          {/* <Nav className='mb-md-3' navbar>
            <NavItem className='active-pro active'>
              <NavLink href='#version'>
                <i className='bi bi-info-circle' />
                Version 0.1.0 Beta
              </NavLink>
            </NavItem>
          </Nav> */}
        </Collapse>
      </Container>
    </Navbar>
  )
}

Sidebar.defaultProps = {
  routes: [{}]
}

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
  })
}

export default Sidebar
