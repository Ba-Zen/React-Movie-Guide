import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='options'>
      <Link className='options' to='/movies'>
        MOVIES
      </Link>
      <Link className='options' to='/shows'>
        TV SHOWS
      </Link>
    </div>
  </div>
);

export default Header;
