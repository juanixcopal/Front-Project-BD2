import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import Login from './pages/login'
import Layout from './components/Layouts/Layout.js'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/plugins/nucleo/css/nucleo.css'
import './assets/scss/argon-dashboard-react.scss'

const App = () => {
  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path={`/`} component={Login} />
        {token ? (
          <>
            <Route exact path={`/`} />
            <Route path='/neo4six' render={props => <Layout {...props} />} />
          </>
        ) : (
          <Route to={'/login'} component={Login} />
        )}
      </Switch>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
