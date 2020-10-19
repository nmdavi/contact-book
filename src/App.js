import React from 'react'
import Header from './components/header'
import Login from './components/login/login'
import Register from './components/login/register'
import Logout from './components/login/logout'
import Book from './components/book/book'
import Profile from './components/profile/profile'
import {
  BrowserRouter as Router, Switch, Route, NavLink
} from 'react-router-dom';
import * as ROUTE from './const/route'
import * as AUTH from './const/auth'

import './app.scss'

function App() {
  const user = AUTH.isAuthenticated()

  return (
    <div>
      <Router>
        <Header>
          {
            user ?
              <>
                <NavLink exact to="/" className='link-header' activeClassName='active'>Home</NavLink>
                <NavLink to="/profile" className='link-header' activeClassName='active'>Profile</NavLink>
                <NavLink to="/logout" className='link-header' activeClassName='active' onClick={() => AUTH.logout()}>Logout</NavLink>
              </>
              :
              <>
                (
                  <NavLink to="/login" className='link-header' activeClassName='active'>Login</NavLink>
                <NavLink to="/register" className='link-header' activeClassName='active'>Register</NavLink>
                )
              </>
          }
        </Header >

        <Switch>
          <Route path={ROUTE.Home} component={Book} exact={true} />
          <Route path={ROUTE.Login} component={Login} />
          <Route path={ROUTE.Register} component={Register} />
          <Route path={ROUTE.Logout} component={Login} />
          <Route path={ROUTE.Profile} component={Profile} />
        </Switch>
      </Router >
    </div >
  )
}

export default App
