import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import History from './History'
import Solutions from './Solutions'
import Navbar from './Navbar'

import '../styles/App.css'

const NoMatch = ({location}) => (
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
      <Route exact path='/' component={Home} {...this.props} />
      <Route exact path='/history' component={History} {...this.props} />
      <Route exact path='/solutions' component={Solutions} {...this.props} />
      <Route component={NoMatch} {...this.props} />
    </Switch>
  </div>
)

export default App
