import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import Login from './login';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Main;
