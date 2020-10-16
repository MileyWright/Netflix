import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Browse, Signin, Signup } from './Pages';
import * as Routes from './Constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route exact path={Routes.BROWSE} component={Browse} />
        <Route exact path={Routes.SIGN_IN} component={Signin} />
        <Route exact path={Routes.SIGN_UP} component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
