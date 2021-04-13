import React from 'react';
import Inicio from './components/inicio'
import Base from './components/Base'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Base/>
        </Route>
        <Route path="/inicio">
          <Inicio/>
        </Route>
        
      </Switch>
      
    </Router>
  );
}

export default App;
