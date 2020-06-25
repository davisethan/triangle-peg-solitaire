import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Solutions from './pages/Solutions';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/solutions" component={Solutions} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
