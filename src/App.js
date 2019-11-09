import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import MovieList from './components/movie-list/movie-list.component';

const App = () => (
  <div>
    <Header />
    <MovieList />
  </div>
);

export default App;
