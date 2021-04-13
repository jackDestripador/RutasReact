import React from 'react';
import Inicio from './components/Inicio'
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
      <Link to="/inicio">Inicio</Link>
      <Link to="/">Base</Link>
      <Switch>
         <Route path="/inicio/:id/:nombre/:edad">
          <Inicio/>
        </Route>
        <Route exact path="/">
          <Base/>
        </Route>

       
        
      </Switch>
      
    </Router>
  );
}

export default App;
