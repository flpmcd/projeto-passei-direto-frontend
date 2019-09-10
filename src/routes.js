import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Form from './pages/Form';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/edit/:id" component={Form} />
        <Route path="/add/" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}
