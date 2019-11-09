import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import MovieList from './components/movie-list/movie-list.component';
import ShowList from './components/show-list/show-list.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/movies' component={MovieList} />
      <Route path='/shows' component={ShowList} />
    </Switch>
  </div>
);

export default App;
