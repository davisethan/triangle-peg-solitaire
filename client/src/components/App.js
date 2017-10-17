import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import History from './History'
import Solutions from './Solutions'
import Navbar from './Navbar'
import Play from './Play'
import Rules from './Rules'

import '../styles/App.css'

const NoMatch = () => (
  <div>
    <Navbar {...this.props} />
    <br />
    <div id='no-match'>
      <h1 className='page-title'>Page Not Found</h1>
    </div>
  </div>
)

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/play' component={Play} />
      <Route exact path='/rules' component={Rules} />
      <Route exact path='/history' component={History} />
      <Route exact path='/solutions' component={Solutions} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App
