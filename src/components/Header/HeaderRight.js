import React from 'react';
import Avatar from '../Avatar/Avatar';
import Search from '../Search/Search';
import classes from '../../stylesheets/layouts/_header.scss';

const HeaderRight = () => {
  return (
    <div className={classes.header__right} >
      <Search />
      <Avatar />
    </div>
  );
};

export default HeaderRight;
