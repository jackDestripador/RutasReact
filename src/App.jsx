
import React from 'react';
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
        <Route path="/inicio">
          Estas en Inicio
        </Route>
        <Route path="/">
          Esta es la url base
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
