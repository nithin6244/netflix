import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';
import classes from '../../stylesheets/layouts/_header.scss';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__wrapper}>
        <HeaderLeft />
        <HeaderMiddle />
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
