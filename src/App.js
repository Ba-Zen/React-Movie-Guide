import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import MoviePage from './pages/movie-page/movie-page.component';
import ShowPage from './pages/show-page/show-page.component';
import MoviesLatest from './components/movies-latest/movies-latest.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/movies' component={MoviePage} />
      <Route path='/shows' component={ShowPage} />
      <Route path='/movies-latest' component={MoviesLatest} />
    </Switch>
  </div>
);

export default App;
