import React from 'react';
import axios from 'axios';
import './movie-page.styles.scss';
import { Link } from 'react-router-dom';

import MovieCard from '../../components/movie-card/movie-card.component';

class MoviePage extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=0d134c0b91dab25d088582c2cef0e72b&language=en-US&page=1`;
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    Promise.all([axios.get(proxyUrl + url)]).then(([movies]) => {
      this.setState({ movies: movies.data.results });
    });
  }

  render() {
    const movies = this.state.movies;
    console.log(movies);
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
          {movies.map((movie, idx) => (
            <MovieCard key={idx} className='movie-card' movie={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default MoviePage;
