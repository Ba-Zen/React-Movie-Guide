import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    movies: [],
    img: []
  };

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=0d134c0b91dab25d088582c2cef0e72b&language=en-US&page=1`;
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const imgUrl = `https://api.themoviedb.org/3/configuration?api_key=0d134c0b91dab25d088582c2cef0e72b`;
    Promise.all([axios.get(proxyUrl + url), axios.get(imgUrl)]).then(
      ([movies, img]) => {
        console.log(movies);
        //const movies = res.data.results;
        this.setState({ movies: movies.data.results, img: img.data.results });
        // console.log('movies', movRes);
        // console.log('img', imgRes);
      }
    );
  }

  render() {
    const movies = this.state.movies;
    console.log('MOVIES', movies.results);

    return (
      <div>
        {movies.map(movie => (
          <>
            <div>{movie.title}</div>
          </>
        ))}
      </div>
    );
  }
}

export default App;
