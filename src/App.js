import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import MoviePage from './pages/movie-page/movie-page.component';
import ShowPage from './pages/show-page/show-page.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/movies' component={MoviePage} />
      <Route path='/shows' component={ShowPage} />
    </Switch>
  </div>
);

export default App;
