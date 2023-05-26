import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.js'
import Sidebar from '../Sidebar/Sidebar.js'
import routes from '../../routes.js'

const Layout = props => {
  const mainContent = React.useRef(null)

  //   useEffect(() => {
  //     document.documentElement.scrollTop = 0
  //     document.scrollingElement.scrollTop = 0
  //     mainContent.current.scrollTop = 0
  //   }, [location])

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/neo4six') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />
      } else {
        return null
      }
    })
  }

  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name
      }
    }
    return 'Brand'
  }

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: '/',
          imgSrc: require('../../images/neo4sixLogo.png'),
          imgAlt: '...'
        }}
      />
      <div className='main-content' ref={mainContent}>
        <Navbar {...props} brandText={getBrandText(props.location.pathname)} />
        <Switch>
          {getRoutes([...routes])}
          <Redirect from='/' to='/neo4six/books' />
        </Switch>
      </div>
    </>
  )
}

export default Layout
