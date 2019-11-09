import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/film.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Logo className='logo' />
    </div>
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
