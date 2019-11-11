import React from 'react';
import './movie-card.styles.scss';

const MovieCard = props => {
  //console.log(props.movie.poster_path);
  return (
    <div className='container'>
      <img
        className='image'
        alt={props.movie.original_title}
        src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}
      />
      <h3 className='title'>{props.movie.original_title}</h3>
      <p className='year'>{props.movie.release_date.slice(0, 4)}</p>
    </div>
  );
};

export default MovieCard;
