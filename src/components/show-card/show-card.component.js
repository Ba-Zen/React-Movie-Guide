import React from 'react';
import './show-card.styles.scss';

const ShowCard = props => {
  return (
    <div className='container'>
      <img
        className='image'
        alt={props.show.title}
        src={`https://image.tmdb.org/t/p/w185/${props.show.poster_path}`}
      />
      <h3 className='title'>{props.show.original_name}</h3>
      <p className='year'>{props.show.first_air_date.slice(0, 4)}</p>
    </div>
  );
};

export default ShowCard;
