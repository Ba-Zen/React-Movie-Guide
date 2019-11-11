import React from 'react';
import axios from 'axios';
import './movies-latest.styles.scss';
import { Link } from 'react-router-dom';

import MovieCard from '../movie-card/movie-card.component';

class MoviesLatest extends React.Component {
  state = {
    latestMovies: []
  };

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/latest?api_key=0d134c0b91dab25d088582c2cef0e72b&language=en-US`;

    axios.get(url).then(latestMovies => {
      console.log(latestMovies);
      this.setState({ latestMovies: latestMovies.data });
    });
  }

  render() {
    const latestMovies = this.state.latestMovies;
    console.log(latestMovies);
    return (
      <>
        <div className='sub-header'>
          <div className='options'>
            <Link className='option' to='/movies-popular'>
              POPULAR
            </Link>
            <Link className='option' to='/movies-latest'>
              LATEST
            </Link>
            <Link className='option' to='/movies-top-rated'>
              TOP RATED
            </Link>
          </div>
        </div>
        <div className='list'>
          {latestMovies.map((latestMovie, idx) => (
            <MovieCard
              key={idx}
              className='movie-card'
              latestMovie={latestMovie}
            />
          ))}
        </div>
      </>
    );
  }
}

export default MoviesLatest;
