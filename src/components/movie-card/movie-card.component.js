import React from 'react';
import axios from 'axios';
import './movie-card.styles.scss';

class MovieCard extends React.Component {
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
      <div className='container'>
        {movies.map((movie, idx) => (
          <div key={idx} className='movie-card'>
            <div
              alt={movie.title}
              className='image'
              style={{
                backgroundImage:
                  'url(' +
                  `https://image.tmdb.org/t/p/w185/${movie.poster_path}` +
                  ')'
              }}
            >
              {' '}
              <span className='title'>{movies.title}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieCard;
