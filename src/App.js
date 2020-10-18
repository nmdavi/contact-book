import React from 'react'
import Header from './components/header'
import Login from './components/login/login'
import Register from './components/login/register'
import Book from './components/book/book'
import Profile from './components/profile/profile'
import {
  BrowserRouter as Router, Switch, Route, NavLink
} from 'react-router-dom';
import * as ROUTE from './route'

import './app.scss'

function App() {
  const user = true
  return (
    <div>
      <Router>
        <Header>
          <NavLink exact to="/" className='link-header' activeClassName='active'>Home</NavLink>
          {user ? <NavLink to="/profile" className='link-header' activeClassName='active'>Profile</NavLink> : <>(<NavLink to="/login" className='link-header' activeClassName='active'>Login</NavLink> <NavLink to="/register" className='link-header' activeClassName='active'>Register</NavLink>)</>}
        </Header >

        <Switch>
          <Route path={ROUTE.Home} component={Book} exact={true} />
          <Route path={ROUTE.Login} component={Login} />
          <Route path={ROUTE.Register} component={Register} />
          <Route path={ROUTE.Profile} component={Profile} />
        </Switch>
      </Router >
    </div >
  )
}

export default App
