import React from 'react';
import { Link } from 'react-router-dom';

import './sub-header.styles.scss';

const SubHeader = () => (
  <div className='sub-header'>
    <div className='options'>
      <Link className='option' to='/popular'>
        POPULAR
      </Link>
      <Link className='option' to='/latest'>
        LATEST
      </Link>
      <Link className='option' to='/top-rated'>
        TOP RATED
      </Link>
    </div>
  </div>
);

export default SubHeader;
