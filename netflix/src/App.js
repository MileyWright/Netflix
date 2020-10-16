import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from './Constants/routes';
import Home from './Pages/home';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
