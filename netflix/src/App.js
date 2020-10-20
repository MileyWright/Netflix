import React from 'react';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import {Home, Browse, Signin, Signup } from './Pages';
import * as Routes from './Constants/routes';
import { IsUserRedirect, ProtectedRoute } from './Helpers/Routes';

function App() { 
  const  user  = {name: "Me"};
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={Routes.BROWSE}>
          <Browse/>
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.HOME}>
          <Home/>
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
