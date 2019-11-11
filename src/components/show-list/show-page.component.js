import React from 'react';
import axios from 'axios';
import './show-page.styles.scss';
import { Link } from 'react-router-dom';

import ShowCard from '../../show-card/show-card.component';

class ShowPage extends React.Component {
  state = {
    shows: []
  };

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=0d134c0b91dab25d088582c2cef0e72b&language=en-US&page=1`;
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    Promise.all([axios.get(proxyUrl + url)]).then(([shows]) => {
      this.setState({ shows: shows.data.results });
    });
  }

  render() {
    const shows = this.state.shows;
    console.log(shows);
    return (
      <>
        <div className='sub-header'>
          <div className='options'>
            <Link className='option' to='/shows-popular'>
              POPULAR
            </Link>
            <Link className='option' to='/shows-latest'>
              LATEST
            </Link>
            <Link className='option' to='/shows-top-rated'>
              TOP RATED
            </Link>
          </div>
        </div>
        <div className='list'>
          {shows.map((show, idx) => (
            <ShowCard key={idx} className='show-card' show={show} />
          ))}
        </div>
      </>
    );
  }
}

export default ShowPage;
