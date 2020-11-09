import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './cmps/Navbar';

import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route component={Home} path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
