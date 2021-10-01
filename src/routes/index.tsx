import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}